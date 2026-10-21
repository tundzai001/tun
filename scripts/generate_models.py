import bpy
import bmesh
import math
import os

GOLDEN_ANGLE = 137.507764 * (math.pi / 180.0)

def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)

def create_material(name, base_color, metallic=0.0, roughness=0.3, specular_ior_level=0.5, emission_color=(0,0,0,1), emission_strength=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs['Base Color'].default_value = base_color
        bsdf.inputs['Metallic'].default_value = metallic
        bsdf.inputs['Roughness'].default_value = roughness
        if 'Specular IOR Level' in bsdf.inputs:
            bsdf.inputs['Specular IOR Level'].default_value = specular_ior_level
        elif 'Specular' in bsdf.inputs:
            bsdf.inputs['Specular'].default_value = specular_ior_level
        if 'Emission Color' in bsdf.inputs:
            bsdf.inputs['Emission Color'].default_value = emission_color
            bsdf.inputs['Emission Strength'].default_value = emission_strength
        elif 'Emission' in bsdf.inputs:
            bsdf.inputs['Emission'].default_value = emission_color
    return mat

def create_beveled_box(name, dimensions, bevel_width=0.06, segments=3):
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = dimensions
    bpy.ops.object.transform_apply(scale=True)
    
    mod = obj.modifiers.new(name="Bevel", type='BEVEL')
    mod.width = bevel_width
    mod.segments = segments
    mod.profile = 0.7
    bpy.ops.object.modifier_apply(modifier="Bevel")
    
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj

def build_gift_box(output_path):
    clear_scene()
    
    # VIP Materials
    # Deep royal crimson velvet box
    mat_box = create_material("Mat_GiftBox_Ruby", (0.52, 0.03, 0.08, 1.0), metallic=0.15, roughness=0.25, specular_ior_level=0.85)
    # Royal metallic gold foil
    mat_gold = create_material("Mat_Gold_Foil", (1.0, 0.82, 0.28, 1.0), metallic=0.96, roughness=0.18, specular_ior_level=1.0)
    # Inner midnight velvet
    mat_velvet = create_material("Mat_Velvet_Interior", (0.18, 0.015, 0.04, 1.0), metallic=0.05, roughness=0.88)

    # 1. Box Base
    base_dim = (2.0, 2.0, 1.5)
    box_base = create_beveled_box("Box_Base", base_dim, bevel_width=0.07, segments=4)
    box_base.location = (0, 0, base_dim[2] / 2.0)
    bpy.ops.object.transform_apply(location=True)
    box_base.data.materials.append(mat_box)
    
    # Cavity inside base
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    cavity = bpy.context.active_object
    cavity.scale = (base_dim[0] - 0.16, base_dim[1] - 0.16, base_dim[2])
    cavity.location = (0, 0, (base_dim[2] / 2.0) + 0.12)
    bpy.ops.object.transform_apply(scale=True, location=True)
    
    bool_mod = box_base.modifiers.new(name="Cavity_Bool", type='BOOLEAN')
    bool_mod.operation = 'DIFFERENCE'
    bool_mod.object = cavity
    bpy.context.view_layer.objects.active = box_base
    bpy.ops.object.modifier_apply(modifier="Cavity_Bool")
    bpy.data.objects.remove(cavity, do_unlink=True)
    
    # Inner velvet cushion
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    cushion = bpy.context.active_object
    cushion.name = "Inner_Cushion"
    cushion.scale = (base_dim[0] - 0.18, base_dim[1] - 0.18, 0.25)
    cushion.location = (0, 0, 0.2)
    bpy.ops.object.transform_apply(scale=True, location=True)
    cushion.data.materials.append(mat_velvet)
    
    # 2. Base Ribbon (Wraps around base X and Y)
    ribbon_w = 0.32
    ribbon_thick = 0.02
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rx = bpy.context.active_object
    rx.scale = (base_dim[0] + ribbon_thick, ribbon_w, base_dim[2] + ribbon_thick)
    rx.location = (0, 0, base_dim[2] / 2.0)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    ry = bpy.context.active_object
    ry.scale = (ribbon_w, base_dim[1] + ribbon_thick, base_dim[2] + ribbon_thick)
    ry.location = (0, 0, base_dim[2] / 2.0)
    
    bpy.ops.object.select_all(action='DESELECT')
    rx.select_set(True)
    ry.select_set(True)
    bpy.context.view_layer.objects.active = rx
    bpy.ops.object.join()
    ribbon_base = bpy.context.active_object
    ribbon_base.name = "Ribbon_Base"
    ribbon_base.data.materials.append(mat_gold)
    bpy.ops.object.transform_apply(scale=True, location=True)
    for p in ribbon_base.data.polygons: p.use_smooth = True

    # 3. Box Lid
    lid_dim = (2.12, 2.12, 0.42)
    lid_z = base_dim[2] + (lid_dim[2] / 2.0) - 0.06
    box_lid = create_beveled_box("Box_Lid", lid_dim, bevel_width=0.06, segments=3)
    box_lid.location = (0, 0, lid_z)
    box_lid.data.materials.append(mat_box)
    bpy.ops.object.transform_apply(location=False) # Keep local origin at center of lid for clean rotation
    
    # Hollow underside of lid
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    lid_cavity = bpy.context.active_object
    lid_cavity.scale = (base_dim[0] + 0.04, base_dim[1] + 0.04, 0.35)
    lid_cavity.location = (0, 0, lid_z - 0.08)
    bpy.ops.object.transform_apply(scale=True, location=True)
    
    lbool = box_lid.modifiers.new(name="Lid_Bool", type='BOOLEAN')
    lbool.operation = 'DIFFERENCE'
    lbool.object = lid_cavity
    bpy.context.view_layer.objects.active = box_lid
    bpy.ops.object.modifier_apply(modifier="Lid_Bool")
    bpy.data.objects.remove(lid_cavity, do_unlink=True)

    # 4. Ribbon on Lid
    top_z = lid_z + (lid_dim[2] / 2.0)
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rlid_x = bpy.context.active_object
    rlid_x.scale = (lid_dim[0] + 0.02, ribbon_w, lid_dim[2] + 0.02)
    rlid_x.location = (0, 0, lid_z)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rlid_y = bpy.context.active_object
    rlid_y.scale = (ribbon_w, lid_dim[1] + 0.02, lid_dim[2] + 0.02)
    rlid_y.location = (0, 0, lid_z)
    
    bpy.ops.object.select_all(action='DESELECT')
    rlid_x.select_set(True)
    rlid_y.select_set(True)
    bpy.context.view_layer.objects.active = rlid_x
    bpy.ops.object.join()
    ribbon_lid = bpy.context.active_object
    ribbon_lid.name = "Ribbon_Lid"
    ribbon_lid.data.materials.append(mat_gold)
    bpy.ops.object.transform_apply(scale=True, location=True)
    for p in ribbon_lid.data.polygons: p.use_smooth = True

    # 5. Bow Top
    bow_parts = []
    # Knot
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=16, radius=0.18)
    knot = bpy.context.active_object
    knot.name = "Bow_Knot"
    knot.scale = (1.1, 1.1, 0.75)
    knot.location = (0, 0, top_z + 0.12)
    knot.data.materials.append(mat_gold)
    for p in knot.data.polygons: p.use_smooth = True
    bow_parts.append(knot)

    # Outer 4 main ribbon loops
    for i in range(4):
        ang = (math.pi / 2.0) * i + (math.pi / 4.0)
        bpy.ops.mesh.primitive_torus_add(major_radius=0.38, minor_radius=0.08, major_segments=24, minor_segments=14)
        loop = bpy.context.active_object
        loop.name = f"Bow_Loop_{i}"
        loop.scale = (1.35, 0.45, 0.8)
        loop.rotation_euler = (math.radians(35), math.radians(20), ang)
        dist = 0.32
        loop.location = (math.cos(ang) * dist, math.sin(ang) * dist, top_z + 0.28)
        loop.data.materials.append(mat_gold)
        for p in loop.data.polygons: p.use_smooth = True
        bow_parts.append(loop)

    # Inner 4 smaller ribbon loops
    for i in range(4):
        ang = (math.pi / 2.0) * i
        bpy.ops.mesh.primitive_torus_add(major_radius=0.25, minor_radius=0.065, major_segments=20, minor_segments=12)
        loop = bpy.context.active_object
        loop.name = f"Bow_Inner_{i}"
        loop.scale = (1.2, 0.4, 0.75)
        loop.rotation_euler = (math.radians(48), math.radians(10), ang)
        dist = 0.2
        loop.location = (math.cos(ang) * dist, math.sin(ang) * dist, top_z + 0.24)
        loop.data.materials.append(mat_gold)
        for p in loop.data.polygons: p.use_smooth = True
        bow_parts.append(loop)

    # 2 Cascading ribbon tails
    for side in (-1, 1):
        bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.14, depth=0.9)
        tail = bpy.context.active_object
        tail.name = f"Bow_Tail_{side}"
        tail.scale = (1.0, 0.08, 1.0)
        tail.rotation_euler = (math.radians(65), math.radians(15 * side), math.radians(90 + 35 * side))
        tail.location = (0.5 * side, -0.65, top_z - 0.05)
        tail.data.materials.append(mat_gold)
        for p in tail.data.polygons: p.use_smooth = True
        bow_parts.append(tail)

    # Join bow into single mesh
    bpy.ops.object.select_all(action='DESELECT')
    for p in bow_parts:
        p.select_set(True)
    bpy.context.view_layer.objects.active = knot
    bpy.ops.object.join()
    bow = bpy.context.active_object
    bow.name = "Bow_Top"
    bpy.ops.object.transform_apply(scale=True, location=True)

    # 6. Golden Rim trim around lid lip
    bpy.ops.mesh.primitive_cube_add(size=1.0)
    rim = bpy.context.active_object
    rim.name = "Lid_Gold_Rim"
    rim.scale = (lid_dim[0] + 0.03, lid_dim[1] + 0.03, 0.04)
    rim.location = (0, 0, lid_z - (lid_dim[2]/2.0) + 0.02)
    rim.data.materials.append(mat_gold)
    bpy.ops.object.transform_apply(scale=True, location=True)
    for p in rim.data.polygons: p.use_smooth = True

    # Parent Ribbon_Lid, Bow_Top, and Lid_Gold_Rim to Box_Lid
    ribbon_lid.parent = box_lid
    bow.parent = box_lid
    rim.parent = box_lid

    print(f"Exporting Gift Box to {output_path}...")
    bpy.ops.export_scene.gltf(
        filepath=output_path,
        export_format='GLB',
        use_selection=False,
        export_apply=False,
        export_materials='EXPORT'
    )
    print("Gift Box exported successfully!")

def build_magic_flower(output_path):
    clear_scene()
    
    # VIP Materials
    # Glowing Velvet Crimson Rose Petals with golden light
    mat_petal = create_material(
        "Mat_Rose_Petal", 
        (0.96, 0.16, 0.32, 1.0), 
        metallic=0.1, 
        roughness=0.32, 
        specular_ior_level=0.75,
        emission_color=(0.95, 0.18, 0.32, 1.0),
        emission_strength=0.18
    )
    mat_stamen = create_material(
        "Mat_Gold_Stamen", 
        (1.0, 0.86, 0.25, 1.0), 
        metallic=0.85, 
        roughness=0.2,
        emission_color=(1.0, 0.85, 0.25, 1.0),
        emission_strength=0.45
    )
    mat_stem = create_material(
        "Mat_Stem_Green", 
        (0.08, 0.44, 0.19, 1.0), 
        metallic=0.08, 
        roughness=0.4
    )

    # Stem
    bpy.ops.mesh.primitive_cylinder_add(vertices=20, radius=0.045, depth=2.2)
    stem = bpy.context.active_object
    stem.name = "Flower_Stem"
    stem.location = (0, 0, 1.1)
    stem.data.materials.append(mat_stem)
    for p in stem.data.polygons: p.use_smooth = True

    # 2 Rose leaves
    leaves = []
    for i, (z_pos, angle, tilt) in enumerate([(0.75, 45, 30), (1.2, 220, -25)]):
        bm = bmesh.new()
        bmesh.ops.create_grid(bm, x_segments=6, y_segments=6, size=0.3)
        for v in bm.verts:
            u = v.co.x / 0.3
            w = (v.co.y + 0.3) / 0.6
            v.co.x = u * 0.22 * math.sin(w * math.pi)
            v.co.y = w * 0.55
            v.co.z = -0.06 * (u * u) + 0.05 * math.sin(w * math.pi)
        mesh = bpy.data.meshes.new(f"Leaf_Mesh_{i}")
        bm.to_mesh(mesh)
        bm.free()
        
        leaf = bpy.data.objects.new(f"Flower_Leaf_{i}", mesh)
        bpy.context.scene.collection.objects.link(leaf)
        leaf.rotation_mode = 'ZXY'
        leaf.rotation_euler = (math.radians(tilt), 0, math.radians(angle))
        rad = math.radians(angle)
        leaf.location = (math.cos(rad) * 0.08, math.sin(rad) * 0.08, z_pos)
        leaf.data.materials.append(mat_stem)
        for p in leaf.data.polygons: p.use_smooth = True
        leaves.append(leaf)

    # Calyx 5 stars
    calyx = []
    for i in range(5):
        ang = (math.pi * 2.0 / 5.0) * i
        bpy.ops.mesh.primitive_cone_add(vertices=12, radius1=0.075, depth=0.38)
        c = bpy.context.active_object
        c.scale = (0.5, 1.3, 0.2)
        c.rotation_euler = (math.radians(110), 0, ang)
        c.location = (math.cos(ang) * 0.12, math.sin(ang) * 0.12, 2.15)
        c.data.materials.append(mat_stem)
        for p in c.data.polygons: p.use_smooth = True
        calyx.append(c)

    # Fibonacci Blooming Petals
    def make_curved_petal(name, scale_factor, flare_angle, dist, rot_angle, z_offset):
        bm = bmesh.new()
        bmesh.ops.create_grid(bm, x_segments=8, y_segments=8, size=0.5)
        for v in bm.verts:
            u = v.co.x / 0.5
            w = (v.co.y + 0.5) # 0 to 1
            width_factor = math.sin(w * math.pi) ** 0.55 if w > 0 else 0
            v.co.x = u * 0.5 * (0.2 + 0.8 * width_factor)
            v.co.y = w * 0.85
            cup = -(u * u) * 0.17
            curl = -0.15 * math.sin(w * math.pi * 0.8) + (0.35 if w > 0.65 else 0) * (w - 0.65)
            v.co.z = (cup + curl)
        
        mesh = bpy.data.meshes.new(name)
        bm.to_mesh(mesh)
        bm.free()
        
        obj = bpy.data.objects.new(name, mesh)
        bpy.context.scene.collection.objects.link(obj)
        
        sol = obj.modifiers.new('Solid', 'SOLIDIFY')
        sol.thickness = 0.015 * scale_factor
        
        sub = obj.modifiers.new('Subsurf', 'SUBSURF')
        sub.levels = 1
        
        obj.scale = (scale_factor, scale_factor, scale_factor)
        obj.location = (math.cos(rot_angle) * dist, math.sin(rot_angle) * dist, 2.2 + z_offset)
        obj.rotation_mode = 'ZXY'
        obj.rotation_euler = (math.radians(flare_angle), 0, rot_angle - math.pi/2)
        obj.data.materials.append(mat_petal)
        
        # Apply modifiers and smooth
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier="Solid")
        bpy.ops.object.modifier_apply(modifier="Subsurf")
        for p in obj.data.polygons: p.use_smooth = True
        return obj

    petals = []
    num_petals = 28
    for i in range(num_petals):
        t = i / float(num_petals)
        s = 0.28 + 0.95 * (t ** 0.8)
        # Inner petals are more upright (tight spiral bud), outer petals bloom wide
        flare = 8 + 75 * (t ** 1.3)
        dist = 0.015 + 0.32 * (t ** 0.9)
        rot = i * GOLDEN_ANGLE
        z = 0.12 * (1.0 - (t ** 0.6))
        p = make_curved_petal(f'Rose_Petal_{i}', s, flare, dist, rot, z)
        petals.append(p)

    # Delicate golden stamen cluster in the very center
    for si in range(6):
        ang = (math.pi * 2.0 / 6.0) * si
        bpy.ops.mesh.primitive_uv_sphere_add(segments=12, ring_count=8, radius=0.025)
        st = bpy.context.active_object
        st.name = f"Flower_Stamen_{si}"
        st.location = (math.cos(ang) * 0.03, math.sin(ang) * 0.03, 2.22)
        st.data.materials.append(mat_stamen)
        for p in st.data.polygons: p.use_smooth = True
        petals.append(st)

    # Join Blossom into one single head object
    bpy.ops.object.select_all(action='DESELECT')
    for part in petals + calyx:
        part.select_set(True)
    bpy.context.view_layer.objects.active = petals[0]
    bpy.ops.object.join()
    blossom = bpy.context.active_object
    blossom.name = "Blossom_Head"
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
    blossom.parent = flower_stem

    print(f"Exporting Magic Flower to {output_path}...")
    bpy.ops.export_scene.gltf(
        filepath=output_path,
        export_format='GLB',
        use_selection=False,
        export_apply=False,
        export_materials='EXPORT'
    )
    print("Magic Flower exported successfully!")

if __name__ == "__main__":
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(current_dir)
    models_dir = os.path.join(project_dir, "models")
    os.makedirs(models_dir, exist_ok=True)
    
    box_path = os.path.join(models_dir, "luxury_gift_box.glb")
    flower_path = os.path.join(models_dir, "magic_flower.glb")
    
    build_gift_box(box_path)
    build_magic_flower(flower_path)
