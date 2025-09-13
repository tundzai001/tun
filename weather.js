
const API_KEY = '2b84b4ab9170412aa91181745251209'; 
const CHENGDU_QUERY = 'Chengdu'; 

export async function getWeatherData() {
    // Chỉ cần MỘT lượt gọi API duy nhất
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CHENGDU_QUERY}&days=1&aqi=yes&alerts=no`;

    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) {
            console.error("Lỗi khi gọi API WeatherAPI.com:", response.statusText);
            return null;
        }

        const data = await response.json();
        
        // Lấy thông tin thiên văn từ bên trong dữ liệu dự báo (ĐÃ SỬA)
        const astronomyData = data.forecast.forecastday[0].astro;

        const processedData = {
            temperature: Math.round(data.current.temp_c),
            conditionText: data.current.condition.text,
            is_day: data.current.is_day === 1,
            localtime: data.location.localtime,
            windScale: windMphToBeaufort(data.current.wind_mph),
            is_raining: data.current.precip_mm > 0.1,
            is_snowing: data.current.condition.text.toLowerCase().includes('snow'),
            aqi: {
                value: data.current.air_quality['us-epa-index'],
                category: getAqiCategory(data.current.air_quality['us-epa-index'])
            },
            moon: {
                phase: astronomyData.moon_phase, // ĐÃ SỬA
            }
        };

        console.log("Dữ liệu thời tiết đầy đủ:", processedData);
        return processedData;

    } catch (error) {
        console.error("Lỗi mạng hoặc không thể kết nối API:", error);
        return null;
    }
}

function windMphToBeaufort(mph) {
    if (mph < 1) return 0; if (mph < 4) return 1; if (mph < 8) return 2;
    if (mph < 13) return 3; if (mph < 19) return 4; if (mph < 25) return 5;
    if (mph < 32) return 6; if (mph < 39) return 7; if (mph < 47) return 8;
    if (mph < 55) return 9; if (mph < 64) return 10; if (mph < 73) return 11;
    return 12;
}

function getAqiCategory(index) {
    switch (index) {
        case 1: return 'Good'; case 2: return 'Moderate';
        case 3: return 'Unhealthy for Sensitive Groups'; case 4: return 'Unhealthy';
        case 5: return 'Very Unhealthy'; case 6: return 'Hazardous';
        default: return 'Unknown';
    }
}
