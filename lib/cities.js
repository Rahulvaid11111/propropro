// Ontario cities for dynamic location pages
export const cities = [
  // GTA Cities
  'toronto',
  'mississauga',
  'brampton',
  'markham',
  'vaughan',
  'richmond-hill',
  'oakville',
  'burlington',
  'milton',
  'newmarket',
  'ajax',
  'pickering',
  'whitby',
  'oshawa',
  'clarington',
  'georgina',
  'king',
  'aurora',
  'east-gwillimbury',
  'whitchurch-stouffville',
  'caledon',
  'halton-hills',
  'scugog',
  'uxbridge',
  'brock',
  
  // Hamilton & Niagara Region
  'hamilton',
  'grimsby',
  'lincoln',
  'pelham',
  'st-catharines',
  'niagara-falls',
  'welland',
  'thorold',
  'niagara-on-the-lake',
  'fort-erie',
  'port-colborne',
  'wainfleet',
  'west-lincoln',
  
  // Central Ontario
  'barrie',
  'innisfil',
  'orillia',
  
  // Southwestern Ontario
  'kitchener',
  'waterloo',
  'cambridge',
  'guelph',
  'london',
  'windsor',
  'sarnia',
  'stratford',
  'woodstock',
  'st-thomas',
  'brantford',
  'brant',
  
  // Eastern Ontario
  'ottawa',
  'kingston',
  'belleville',
  'cornwall',
  'brockville',
  'pembroke',
  'clarence-rockland',
  'quinte-west',
  'prince-edward-county',
  
  // Central East Ontario
  'peterborough',
  'kawartha-lakes',
  
  // Northern Ontario
  'greater-sudbury',
  'thunder-bay',
  'sault-ste-marie',
  'north-bay',
  'timmins',
  'kenora',
  'dryden',
  'elliot-lake',
  'temiskaming-shores',
  'owen-sound',
  
  // Additional Cities
  'haldimand-county'
];

// Helper function to format city names for display
export const formatCityName = (citySlug) => {
  return citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Helper function to get city-specific content
export const getCityInfo = (citySlug) => {
  const cityName = formatCityName(citySlug);
  
  return {
    name: cityName,
    slug: citySlug,
    // You can add more city-specific data here in the future
    serviceAreas: [
      `${cityName} and surrounding areas`,
      'Greater Toronto Area',
      'Southern Ontario'
    ]
  };
};
