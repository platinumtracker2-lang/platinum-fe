// Platinum Price Service - Database Integration
// This service fetches platinum prices from our database instead of Yahoo Finance

export const fetchRealPlatinumPrice = async () => {
  try {
    // Fetch from our database API instead of Yahoo Finance
    const response = await fetch('/api/platinum-prices');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Find platinum data from the response
    const platinumData = data.find(item => 
      item.metal_name === "Platinum" || item.pgm_name === "Platinum"
    );
    
    if (!platinumData) {
      throw new Error('Platinum price data not found in response');
    }
    
    console.log('Database Platinum Data:', platinumData);
    
    return platinumData;
    
  } catch (error) {
    console.error('Error fetching platinum price from database:', error);
    
    // Return fallback data with realistic changes
    return {
      metal_name: "Platinum",
      pgm_name: "Platinum", 
      price: 4.12,
      price_change: -0.08,
      price_change_percent: -1.91,
      last_updated: new Date().toISOString(),
      source: "Fallback Data",
      error: error.message
    };
  }
};

// Direct frontend fetch without CORS proxy
export const fetchPlatinumPriceDirectly = async () => {
  try {
    // This will be called directly from React components
    const response = await fetch('/api/platinum-prices');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0]; // Return the platinum data
    
  } catch (error) {
    console.error('Error fetching platinum price from API:', error);
    return null;
  }
};

// Fetch multiple metal prices from database
export const fetchAllMetalPrices = async () => {
  try {
    // Fetch from our database API
    const response = await fetch('/api/platinum-prices');
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Validate that we have data
    if (!data || data.length === 0) {
      throw new Error('No metal price data available');
    }
    
    console.log(`Fetched ${data.length} metal prices from database`);
    return data;
    
  } catch (error) {
    console.error('Error fetching all metal prices from database:', error);
    
    // Return fallback data with realistic changes
    return [
      {
        metal_name: "Platinum",
        pgm_name: "Platinum",
        price: 4.12,
        price_change: -0.08,
        price_change_percent: -1.91,
        last_updated: new Date().toISOString(),
        source: "Fallback Data",
        error: "Unable to fetch real-time data from database"
      }
    ];
  }
};
