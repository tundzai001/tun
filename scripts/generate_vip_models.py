import bpy
import bmesh
import math
import os

GOLDEN_ANGLE = 137.507764 * (math.pi / 180.0)

def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)

def create_pbr_material(name, base_color, metallic=0.0, roughness=0.3, emission_color=(0,0,0,1), emission_strength=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs['Base Color'].default_value = base_color
        bsdf.inputs['Metallic'].default_value = metallic
        bsdf.inputs['Roughness'].default_value = roughness
        if 'Specular IOR Level' in bsdf.inputs:
            bsdf.inputs['Specular IOR Level'].default_value = 0.8
        elif 'Specular' in bsdf.inputs:
            bsdf.inputs['Specular'].default_value = 0.8
        if 'Emission Color' in bsdf.inputs:
            bsdf.inputs['Emission Color'].default_value = emission_color
            bsdf.inputs['Emission Strength'].default_value = emission_strength
    return mat

def create_beveled_cube(name, dimensions, bevel_radius=0.05, segments=4):
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = dimensions
    bpy.ops.object.transform_apply(scale=True)
    
    mod = obj.modifiers.new("Bevel", 'BEVEL')
    mod.width = bevel_radius
    mod.segments = segments
    mod.profile = 0.7
    bpy.ops.object.modifier_apply(modifier="Bevel")
    
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj

def build_luxury_box(output_path):
    clear_scene()
    
    # Apple Luxe Materials
    # Deep Midnight Bordeaux Velvet
    mat_velvet = create_pbr_material("Mat_Bordeaux_Velvet", (0.35, 0.02, 0.06, 1.0), metallic=0.08, roughness=0.32)
    # Mirror Polish 24K Gold
    mat_gold = create_pbr_material("Mat_Mirror_Gold", (1.0, 0.82, 0.28, 1.0), metallic=0.98, roughness=0.12)
    # Inner Dark Velvet Cushion
    mat_cushion = create_pbr_material("Mat_Inner_Cushion", (0.12, 0.01, 0.02, 1.0), metallic=0.02, roughness=0.92)

    # 1. Box Base (Sleek jewelry chest aspect ratio: 1.8 x 1.8 x 0.75)
    base_dim = (1.8, 1.8, 0.75)
    box_base = create_beveled_cube("Box_Base", base_dim, bevel_radius=0.06, segments=4)
    box_base.location = (0, 0, base_dim[2] / 2.0)
    bpy.ops.object.transform_apply(location=True)
    box_base.data.materials.append(mat_velvet)
    
    # Cavity inside base
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    cavity = bpy.context.active_object
    cavity.scale = (base_dim[0] - 0.14, base_dim[1] - 0.14, base_dim[2])
    cavity.location = (0, 0, (base_dim[2] / 2.0) + 0.1)
    bpy.ops.object.transform_apply(scale=True, location=True)
    
    cmod = box_base.modifiers.new("Cavity", 'BOOLEAN')
    cmod.operation = 'DIFFERENCE'
    cmod.object = cavity
    bpy.context.view_layer.objects.active = box_base
    bpy.ops.object.modifier_apply(modifier="Cavity")
    bpy.data.objects.remove(cavity, do_unlink=True)
    
    # Gold Rim around top edge of base
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    trim = bpy.context.active_object
    trim.name = "Base_Gold_Trim"
    trim.scale = (base_dim[0] + 0.02, base_dim[1] + 0.02, 0.035)
    trim.location = (0, 0, base_dim[2] - 0.017)
    trim.data.materials.append(mat_gold)
    bpy.ops.object.transform_apply(scale=True, location=True)
    for p in trim.data.polygons: p.use_smooth = True
    
    # Velvet Cushion inside base
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=16, radius=0.8)
    cushion = bpy.context.active_object
    cushion.name = "Inner_Cushion"
    cushion.scale = (0.95, 0.95, 0.22)
    cushion.location = (0, 0, 0.22)
    cushion.data.materials.append(mat_cushion)
    bpy.ops.object.transform_apply(scale=True, location=True)
    for p in cushion.data.polygons: p.use_smooth = True
    
    # Ribbons on base (Cross wraps with thickness)
    ribbon_w = 0.24
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rx = bpy.context.active_object
    rx.scale = (base_dim[0] + 0.02, ribbon_w, base_dim[2] + 0.02)
    rx.location = (0, 0, base_dim[2] / 2.0)
    rx.data.materials.append(mat_gold)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    ry = bpy.context.active_object
    ry.scale = (ribbon_w, base_dim[1] + 0.02, base_dim[2] + 0.02)
    ry.location = (0, 0, base_dim[2] / 2.0)
    ry.data.materials.append(mat_gold)
    
    bpy.ops.object.select_all(action='DESELECT')
    rx.select_set(True)
    ry.select_set(True)
    trim.select_set(True)
    bpy.context.view_layer.objects.active = rx
    bpy.ops.object.join()
    base_accents = bpy.context.active_object
    base_accents.name = "Base_Gold_Accents"
    base_accents.data.materials.clear()
    base_accents.data.materials.append(mat_gold)
    bpy.ops.object.transform_apply(scale=True, location=True)
    for p in base_accents.data.polygons: p.use_smooth = True

    # 2. Box Lid (Sleek beveled top)
    lid_dim = (1.9, 1.9, 0.28)
    lid_z = base_dim[2] + (lid_dim[2] / 2.0) - 0.04
    box_lid = create_beveled_cube("Box_Lid", lid_dim, bevel_radius=0.05, segments=4)
    box_lid.location = (0, 0, lid_z)
    box_lid.data.materials.append(mat_velvet)
    
    # Ribbons on Lid
    top_z = lid_z + (lid_dim[2] / 2.0)
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rlid_x = bpy.context.active_object
    rlid_x.scale = (lid_dim[0] + 0.02, ribbon_w, lid_dim[2] + 0.02)
    rlid_x.location = (0, 0, lid_z)
    rlid_x.data.materials.append(mat_gold)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rlid_y = bpy.context.active_object
    rlid_y.scale = (ribbon_w, lid_dim[1] + 0.02, lid_dim[2] + 0.02)
    rlid_y.location = (0, 0, lid_z)
    rlid_y.data.materials.append(mat_gold)

    # Gold rim around lid lip
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    lrim = bpy.context.active_object
    lrim.scale = (lid_dim[0] + 0.03, lid_dim[1] + 0.03, 0.03)
    lrim.location = (0, 0, lid_z - (lid_dim[2]/2.0) + 0.015)
    lrim.data.materials.append(mat_gold)

    # 3. 3D Bow Knot and Loops
    bow_parts = []
    # Center pearl knot
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=16, radius=0.15)
    knot = bpy.context.active_object
    knot.scale = (1.1, 1.1, 0.75)
    knot.location = (0, 0, top_z + 0.1)
    knot.data.materials.append(mat_gold)
    for p in knot.data.polygons: p.use_smooth = True
    bow_parts.append(knot)

    # 6 Curved ribbon loops arranged in an elegant rosette
    for i in range(6):
        ang = (math.pi * 2.0 / 6.0) * i + (math.pi / 6.0)
        bpy.ops.mesh.primitive_torus_add(major_radius=0.3, minor_radius=0.065, major_segments=24, minor_segments=14)
        loop = bpy.context.active_object
        loop.scale = (1.3, 0.45, 0.8)
        loop.rotation_euler = (math.radians(38), math.radians(15), ang)
        dist = 0.24
        loop.location = (math.cos(ang) * dist, math.sin(ang) * dist, top_z + 0.22)
        loop.data.materials.append(mat_gold)
        for p in loop.data.polygons: p.use_smooth = True
        bow_parts.append(loop)

    # 2 Cascading ribbon tails
    for side in (-1, 1):
        bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.11, depth=0.75)
        tail = bpy.context.active_object
        tail.scale = (1.0, 0.06, 1.0)
        tail.rotation_euler = (math.radians(65), math.radians(12 * side), math.radians(90 + 30 * side))
        tail.location = (0.42 * side, -0.55, top_z - 0.02)
        tail.data.materials.append(mat_gold)
        for p in tail.data.polygons: p.use_smooth = True
        bow_parts.append(tail)

    # Join all lid gold components
    bpy.ops.object.select_all(action='DESELECT')
    for p in bow_parts + [rlid_x, rlid_y, lrim]:
        p.select_set(True)
    bpy.context.view_layer.objects.active = knot
    bpy.ops.object.join()
    lid_accents = bpy.context.active_object
    lid_accents.name = "Lid_Gold_Accents"
    lid_accents.data.materials.clear()
    lid_accents.data.materials.append(mat_gold)
    for p in lid_accents.data.polygons: p.use_smooth = True

    # Parent lid_accents to box_lid
    lid_accents.parent = box_lid

    # Export
    print(f"Exporting Luxury Box to {output_path}...")
    bpy.ops.export_scene.gltf(
        filepath=output_path,
        export_format='GLB',
        use_selection=False,
        export_apply=False,
        export_materials='EXPORT'
    )
    print("Luxury Box export OK!")

def build_enchanted_rose(output_path):
    clear_scene()

    # Romantic Crystal Velvet Rose Materials
    # Gradient Rose Petal (Deep velvet rose with subtle champagne emissive sheen)
    mat_petal = create_pbr_material(
        "Mat_Rose_Petal", 
        (0.92, 0.12, 0.32, 1.0), 
        metallic=0.12, 
        roughness=0.28,
        emission_color=(0.95, 0.15, 0.35, 1.0),
        emission_strength=0.16
    )
    # Inner Bud Core Petal (Deep radiant crimson)
    mat_core = create_pbr_material(
        "Mat_Core_Petal", 
        (0.78, 0.04, 0.18, 1.0), 
        metallic=0.08, 
        roughness=0.32,
        emission_color=(0.85, 0.06, 0.22, 1.0),
        emission_strength=0.12
    )
    # Golden Stamen Diamonds
    mat_stamen = create_pbr_material(
        "Mat_Gold_Stamen", 
        (1.0, 0.84, 0.22, 1.0), 
        metallic=0.92, 
        roughness=0.15,
        emission_color=(1.0, 0.82, 0.2, 1.0),
        emission_strength=0.5
    )
    # Silk Emerald Stem & Leaves
    mat_stem = create_pbr_material(
        "Mat_Emerald_Stem", 
        (0.06, 0.38, 0.16, 1.0), 
        metallic=0.1, 
        roughness=0.35
    )

    # 1. Stem: Height = 1.3, organic curved cylinder
    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=0.038, depth=1.3)
    stem = bpy.context.active_object
    stem.name = "Flower_Stem"
    stem.location = (0, 0, 0.65)
    stem.data.materials.append(mat_stem)
    for p in stem.data.polygons: p.use_smooth = True

    # 2. Leaves: 3 elegant curved rose leaves
    leaves = []
    leaf_configs = [
        (0.45, 50, 25, 1.1),
        (0.75, 170, -22, 1.2),
        (1.0, 290, 20, 1.0)
    ]
    for i, (z_pos, angle, tilt, sc) in enumerate(leaf_configs):
        bm = bmesh.new()
        bmesh.ops.create_grid(bm, x_segments=8, y_segments=8, size=0.45)
        for v in bm.verts:
            u = v.co.x / 0.45
            w = (v.co.y + 0.45) / 0.9
            width = math.sin(w * math.pi) ** 0.6 if w > 0 else 0
            v.co.x = u * 0.28 * width * sc
            v.co.y = w * 0.8 * sc
            v.co.z = (-0.06 * (u * u) + 0.05 * math.sin(w * math.pi)) * sc
        mesh = bpy.data.meshes.new(f"Leaf_Mesh_{i}")
        bm.to_mesh(mesh)
        bm.free()
        
        leaf = bpy.data.objects.new(f"Rose_Leaf_{i}", mesh)
        bpy.context.scene.collection.objects.link(leaf)
        leaf.rotation_mode = 'ZXY'
        leaf.rotation_euler = (math.radians(tilt), 0, math.radians(angle))
        rad = math.radians(angle)
        leaf.location = (math.cos(rad) * 0.07, math.sin(rad) * 0.07, z_pos)
        leaf.data.materials.append(mat_stem)
        
        sol = leaf.modifiers.new("Solid", 'SOLIDIFY')
        sol.thickness = 0.01
        bpy.context.view_layer.objects.active = leaf
        bpy.ops.object.modifier_apply(modifier="Solid")
        for p in leaf.data.polygons: p.use_smooth = True
        leaves.append(leaf)

    # 3. Calyx: 5 star sepals embracing the rose base
    calyx = []
    flower_head_z = 1.35
    for i in range(5):
        ang = (math.pi * 2.0 / 5.0) * i
        bpy.ops.mesh.primitive_cone_add(vertices=12, radius1=0.08, depth=0.42)
        c = bpy.context.active_object
        c.scale = (0.6, 1.35, 0.22)
        c.rotation_euler = (math.radians(115), 0, ang)
        c.location = (math.cos(ang) * 0.12, math.sin(ang) * 0.12, flower_head_z - 0.02)
        c.data.materials.append(mat_stem)
        for p in c.data.polygons: p.use_smooth = True
        calyx.append(c)

    # 4. Fibonacci Rose Petals (36 petals in total, lush blooming flower)
    def create_sculpted_petal(name, scale_factor, flare_angle, dist, rot_angle, z_offset, mat):
        bm = bmesh.new()
        bmesh.ops.create_grid(bm, x_segments=10, y_segments=10, size=0.55)
        for v in bm.verts:
            u = v.co.x / 0.55
            w = (v.co.y + 0.55)
            w_norm = max(0.0, min(1.0, w / 1.1))
            sin_val = max(0.0, math.sin(w_norm * math.pi))
            width_factor = sin_val ** 0.55
            v.co.x = u * 0.52 * (0.2 + 0.8 * width_factor)
            v.co.y = w * 0.95
            cup = -(u * u) * 0.2
            curl = -0.15 * math.sin(w_norm * math.pi * 0.85) + (0.38 if w_norm > 0.65 else 0) * (w_norm - 0.65)
            v.co.z = (cup + curl)
        
        mesh = bpy.data.meshes.new(name)
        bm.to_mesh(mesh)
        bm.free()
        
        obj = bpy.data.objects.new(name, mesh)
        bpy.context.scene.collection.objects.link(obj)
        
        sol = obj.modifiers.new("Solid", 'SOLIDIFY')
        sol.thickness = 0.015 * scale_factor
        
        sub = obj.modifiers.new("Subsurf", 'SUBSURF')
        sub.levels = 1
        
        obj.scale = (scale_factor, scale_factor, scale_factor)
        obj.location = (math.cos(rot_angle) * dist, math.sin(rot_angle) * dist, flower_head_z + z_offset)
        obj.rotation_mode = 'ZXY'
        obj.rotation_euler = (math.radians(flare_angle), 0, rot_angle - math.pi/2)
        obj.data.materials.append(mat)
        
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier="Solid")
        bpy.ops.object.modifier_apply(modifier="Subsurf")
        for p in obj.data.polygons: p.use_smooth = True
        return obj

    petals = []
    num_petals = 36
    for i in range(num_petals):
        t = i / float(num_petals)
        s = 0.35 + 1.15 * (t ** 0.75)
        flare = 8 + 76 * (t ** 1.25)
        dist = 0.015 + 0.35 * (t ** 0.9)
        rot = i * GOLDEN_ANGLE
        z = 0.18 * (1.0 - (t ** 0.65))
        p_mat = mat_core if i < 10 else mat_petal
        p = create_sculpted_petal(f"Petal_{i}", s, flare, dist, rot, z, p_mat)
        petals.append(p)

    # Center golden stamen pearls
    stamens = []
    for si in range(8):
        ang = (math.pi * 2.0 / 8.0) * si
        bpy.ops.mesh.primitive_uv_sphere_add(segments=12, ring_count=8, radius=0.022)
        st = bpy.context.active_object
        st.name = f"Stamen_{si}"
        st.location = (math.cos(ang) * 0.035, math.sin(ang) * 0.035, flower_head_z + 0.16)
        st.data.materials.append(mat_stamen)
        for p in st.data.polygons: p.use_smooth = True
        stamens.append(st)

    # Join all blossom head components
    bpy.ops.object.select_all(action='DESELECT')
    for part in petals + calyx + stamens:
        part.select_set(True)
    bpy.context.view_layer.objects.active = petals[0]
    bpy.ops.object.join()
    blossom_head = bpy.context.active_object
    blossom_head.name = "Blossom_Head"
    bpy.ops.object.transform_apply(scale=True, location=False)

    # Join Stem and leaves
    bpy.ops.object.select_all(action='DESELECT')
    for lf in leaves:
        lf.select_set(True)
    stem.select_set(True)
    bpy.context.view_layer.objects.active = stem
    bpy.ops.object.join()
    flower_stem = bpy.context.active_object
    flower_stem.name = "Stem_Group"
    bpy.ops.object.transform_apply(scale=True, location=False)

    # Blossom is child of Stem_Group
    blossom_head.parent = flower_stem

    # Export
    print(f"Exporting Enchanted Rose to {output_path}...")
    bpy.ops.export_scene.gltf(
        filepath=output_path,
        export_format='GLB',
        use_selection=False,
        export_apply=False,
        export_materials='EXPORT'
    )
    print("Enchanted Rose export OK!")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(current_dir)
    models_dir = os.path.join(project_dir, "models")
    os.makedirs(models_dir, exist_ok=True)

    box_path = os.path.join(models_dir, "luxury_gift_box.glb")
    flower_path = os.path.join(models_dir, "magic_flower.glb")

    build_luxury_box(box_path)
    build_enchanted_rose(flower_path)
