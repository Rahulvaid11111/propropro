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
  'haldimand-county',
  'chatham-kent',
  'leamington',
  'essex',
  'amherstburg'
];

// Helper function to format city names for display
export const formatCityName = (citySlug) => {
  return citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// City-specific content data for SEO optimization
const cityContentData = {
  // GTA Cities
  'toronto': {
    heroDescription: 'Transform your Toronto event with premium photo booth rentals that capture the energy of Canada\'s largest city. From downtown corporate headquarters to suburban wedding venues, we bring professional entertainment to every corner of the 6ix.',
    localExpertise: 'Toronto Event Specialists',
    expertiseDescription: 'Our Toronto team has been serving the GTA for over 8 years, working with venues from the iconic CN Tower to intimate King Street lofts. We understand Toronto\'s fast-paced event scene and diverse cultural celebrations, from Bay Street corporate galas to Kensington Market art shows.',
    popularVenues: ['Casa Loma', 'Royal York Hotel', 'Evergreen Brick Works', 'The Drake Hotel', 'Liberty Grand', 'Palais Royale'],
    uniqueFeature: 'Same-day delivery available in downtown Toronto',
    testimonialContext: 'Toronto',
    serviceHighlight: 'Specialized for Toronto\'s multicultural celebrations, corporate events in the Financial District, and luxury weddings in Yorkville and Rosedale.',
    neighborhoods: ['Downtown', 'King West', 'Yorkville', 'Distillery District', 'Liberty Village', 'The Beaches', 'Leslieville', 'Queen West'],
    eventTypes: ['Corporate galas in the Financial District', 'Rooftop parties with CN Tower views', 'Multicultural weddings', 'Tech startup launches', 'Art gallery openings', 'Charity fundraisers'],
    localContext: 'Toronto\'s vibrant event scene demands photo booth experiences that match the city\'s energy. Whether you\'re hosting a corporate event in a Bay Street tower or a wedding reception overlooking Lake Ontario, our photo booths capture the sophisticated yet fun-loving spirit of Toronto.',
    whyChooseUsExtended: 'We\'ve photographed thousands of smiles across Toronto\'s 140 neighborhoods, from Scarborough celebrations to Etobicoke corporate events. Our local knowledge includes parking logistics, venue restrictions, and cultural considerations for Toronto\'s diverse communities.'
  },
  'mississauga': {
    heroDescription: 'Mississauga\'s premier photo booth rental service brings excitement to Canada\'s sixth-largest city. From Cooksville community centers to Port Credit waterfront venues, we specialize in creating memorable experiences for Mississauga\'s diverse communities.',
    localExpertise: 'Mississauga Community Specialists',
    expertiseDescription: 'Serving Mississauga for over 6 years, we understand the unique needs of this multicultural city. From Punjabi weddings in Malton to corporate events at Square One, our team navigates Mississauga\'s diverse celebration styles with cultural sensitivity and professional expertise.',
    popularVenues: ['Living Arts Centre', 'Mississauga Convention Centre', 'Palais Royale', 'Carmen\'s Banquet Centre', 'Mississauga Golf & Country Club'],
    uniqueFeature: 'Multilingual service team for diverse celebrations',
    testimonialContext: 'Mississauga',
    serviceHighlight: 'Expert in Mississauga\'s multicultural wedding traditions, corporate headquarters events, and community celebrations across all neighborhoods.',
    neighborhoods: ['Port Credit', 'Streetsville', 'Cooksville', 'Malton', 'Clarkson', 'Meadowvale', 'Erin Mills', 'Hurontario'],
    eventTypes: ['Multicultural weddings', 'Corporate headquarters events', 'Community festival celebrations', 'Graduation parties', 'Anniversary celebrations', 'Cultural association gatherings'],
    localContext: 'Mississauga\'s rich cultural tapestry requires photo booth services that respect and celebrate diversity. Our team is experienced in various cultural traditions and can adapt our service style to match your community\'s celebration preferences.',
    whyChooseUsExtended: 'From the Credit River to Lake Ontario, we\'ve served every corner of Mississauga. Our multilingual team understands the importance of cultural traditions in celebrations and ensures every guest feels included in the photo booth fun.'
  },
  'ottawa': {
    heroDescription: 'Canada\'s capital city deserves world-class entertainment! Our Ottawa photo booth rentals bring diplomatic-level professionalism to government galas, embassy receptions, and celebrations throughout the National Capital Region.',
    localExpertise: 'Capital City Diplomatic Specialists',
    expertiseDescription: 'Operating in Ottawa for over 7 years, our team holds security clearances for government venues and understands the protocol requirements of diplomatic events. From Parliament Hill receptions to Gatineau celebrations, we navigate Ottawa\'s unique bilingual and multicultural event landscape.',
    popularVenues: ['Château Laurier', 'Canadian Museum of History', 'Rideau Hall', 'Shaw Centre', 'National Arts Centre', 'Canadian War Museum'],
    uniqueFeature: 'Security-cleared staff for government and diplomatic events',
    testimonialContext: 'Ottawa',
    serviceHighlight: 'Specialized in government protocol, diplomatic events, embassy celebrations, and bilingual service throughout the National Capital Region.',
    neighborhoods: ['ByWard Market', 'Glebe', 'Westboro', 'Kanata', 'Barrhaven', 'Orleans', 'Nepean', 'Centretown'],
    eventTypes: ['Government galas', 'Embassy receptions', 'Parliamentary events', 'Federal department celebrations', 'Diplomatic ceremonies', 'Bilingual corporate events'],
    localContext: 'Ottawa\'s role as Canada\'s capital creates unique event requirements. Our photo booth services meet the highest standards of professionalism while maintaining the fun atmosphere that makes celebrations memorable for government officials, diplomats, and local residents alike.',
    whyChooseUsExtended: 'We understand Ottawa\'s bilingual requirements and formal protocols. Our security-cleared team has worked with federal departments, embassies, and high-profile venues, ensuring your event meets all security and protocol standards while delivering exceptional entertainment.'
  },
  'hamilton': {
    heroDescription: 'Steel City celebrations deserve premium photo booth experiences that match Hamilton\'s industrial heritage and natural beauty. From escarpment venues with stunning views to waterfront celebrations, we bring excitement to every Hamilton event.',
    localExpertise: 'Steel City Event Professionals',
    expertiseDescription: 'Hamilton\'s unique geography from mountain to lake creates diverse venue challenges we\'ve mastered over 5 years. Our team knows every venue from historic Dundurn Castle to modern waterfront spaces, plus the logistics of escarpment deliveries and downtown parking.',
    popularVenues: ['Dundurn Castle', 'Carmen\'s Banquet Centre', 'Hamilton Convention Centre', 'Royal Botanical Gardens', 'Liuna Station', 'Pier 4 Park'],
    uniqueFeature: 'Specialized escarpment delivery and mountain venue setup',
    testimonialContext: 'Hamilton',
    serviceHighlight: 'Expert in Hamilton\'s industrial-chic venues, historic locations, and challenging escarpment deliveries with stunning city views.',
    neighborhoods: ['Downtown Hamilton', 'Westdale', 'Ancaster', 'Dundas', 'Stoney Creek', 'Binbrook', 'Flamborough', 'Glanbrook'],
    eventTypes: ['Industrial venue weddings', 'Escarpment view celebrations', 'Historic venue events', 'Waterfront corporate galas', 'McMaster University events', 'Steel industry celebrations'],
    localContext: 'Hamilton\'s transformation from steel town to cultural hub creates unique celebration opportunities. Our photo booths complement both the city\'s industrial heritage venues and its growing arts scene, from James Street North galleries to waterfront festivals.',
    whyChooseUsExtended: 'We\'ve conquered Hamilton\'s challenging venue logistics, from narrow historic building access to escarpment deliveries with breathtaking views. Our local expertise ensures smooth setup whether you\'re celebrating in a converted steel building or a mountain-top venue.'
  },
  'london': {
    heroDescription: 'Forest City photo booth rentals capture the vibrant spirit of London, Ontario. From Western University graduations to downtown corporate headquarters, we bring professional entertainment to southwestern Ontario\'s cultural and educational hub.',
    localExpertise: 'Forest City Academic & Corporate Specialists',
    expertiseDescription: 'London\'s unique blend of university energy and corporate sophistication requires specialized event expertise. We\'ve served Western University, Fanshawe College, and major London corporations for over 6 years, understanding both academic celebrations and business formality.',
    popularVenues: ['Museum London', 'London Convention Centre', 'Windermere Manor', 'Western University', 'Fanshawe College', 'Budweiser Gardens'],
    uniqueFeature: 'University graduation and academic event specialists',
    testimonialContext: 'London',
    serviceHighlight: 'Tailored for London\'s academic celebrations, corporate headquarters events, and southwestern Ontario\'s business community.',
    neighborhoods: ['Downtown London', 'Old North', 'Wortley Village', 'Byron', 'Masonville', 'Oakridge', 'Westmount', 'Stoneybrook'],
    eventTypes: ['University graduations', 'Academic conferences', 'Corporate headquarters galas', 'Medical conference celebrations', 'Insurance industry events', 'Student organization parties'],
    localContext: 'London\'s identity as an education and healthcare center creates diverse celebration needs. Our photo booth services adapt from formal academic ceremonies to energetic student parties, always maintaining appropriate professionalism for each occasion.',
    whyChooseUsExtended: 'From Mustang parties to corporate boardroom celebrations, we understand London\'s diverse event landscape. Our team is experienced with university protocols, corporate formality, and the unique energy that makes London, Ontario special.'
  },
  'windsor': {
    heroDescription: 'Border city celebrations deserve international-quality photo booth experiences! Windsor\'s unique position as Canada\'s automotive capital and gateway to Detroit creates distinctive celebration needs we\'ve mastered.',
    localExpertise: 'International Border City Specialists',
    expertiseDescription: 'Windsor\'s automotive industry and international connections create unique event requirements. Our bilingual team has served major automotive executives, cross-border celebrations, and multicultural communities for over 5 years, understanding both Canadian and American event styles.',
    popularVenues: ['Caesars Windsor', 'Willistead Manor', 'St. Clair Centre for the Arts', 'Chrysler Theatre', 'Windsor Riverfront', 'Devonshire Mall'],
    uniqueFeature: 'Bilingual service and cross-border event expertise',
    testimonialContext: 'Windsor',
    serviceHighlight: 'Specialized in automotive industry galas, cross-border celebrations, and Windsor\'s diverse multicultural community events.',
    neighborhoods: ['Downtown Windsor', 'Walkerville', 'Ford City', 'Riverside', 'South Windsor', 'East Windsor', 'West End', 'Sandwich'],
    eventTypes: ['Automotive industry galas', 'Cross-border business events', 'Multicultural weddings', 'Casino celebrations', 'Riverfront festivals', 'International corporate meetings'],
    localContext: 'Windsor\'s position as Canada\'s southernmost city and automotive capital creates a unique celebration culture. Our photo booth services reflect the city\'s international sophistication while honoring its blue-collar automotive heritage.',
    whyChooseUsExtended: 'We understand Windsor\'s unique position between two countries and cultures. Our bilingual team navigates automotive industry formality, casino venue requirements, and the multicultural celebrations that make Windsor special.'
  },
  'kitchener': {
    heroDescription: 'Kitchener\'s tech innovation meets traditional celebration in our premium photo booth experiences. From Oktoberfest festivities to cutting-edge startup launches, we serve the heart of Canada\'s Technology Triangle with modern flair and traditional values.',
    localExpertise: 'Technology Triangle Event Innovators',
    expertiseDescription: 'Kitchener\'s transformation into a tech hub while maintaining German heritage creates unique celebration dynamics. Our team has served major tech companies, traditional Oktoberfest events, and University of Waterloo celebrations for over 4 years.',
    popularVenues: ['Centre in the Square', 'Bingemans', 'Kitchener Memorial Auditorium', 'Tannery Event Centre', 'Victoria Park Pavilion', 'Kitchener Market'],
    uniqueFeature: 'Tech-integrated photo experiences and traditional German celebration expertise',
    testimonialContext: 'Kitchener',
    serviceHighlight: 'Specialized in tech industry events, Oktoberfest celebrations, and the unique blend of innovation and tradition that defines Kitchener.',
    neighborhoods: ['Downtown Kitchener', 'Belmont Village', 'Forest Heights', 'Pioneer Park', 'Doon', 'Stanley Park', 'Bridgeport', 'Country Hills'],
    eventTypes: ['Tech startup launches', 'Oktoberfest celebrations', 'Innovation conferences', 'German cultural events', 'University partnerships', 'Manufacturing industry galas'],
    localContext: 'Kitchener\'s identity as both a tech innovation center and keeper of German traditions creates fascinating celebration opportunities. Our photo booths bridge old-world charm with cutting-edge technology.',
    whyChooseUsExtended: 'From BlackBerry legacy events to modern AI startup celebrations, we understand Kitchener\'s tech evolution. Our German heritage appreciation ensures authentic Oktoberfest experiences while our tech integration appeals to innovation-focused celebrations.'
  },
  'barrie': {
    heroDescription: 'Lakefront celebrations in Barrie deserve photo booth experiences as beautiful as Kempenfelt Bay. From cottage country weddings with stunning water views to downtown corporate events, we capture the natural beauty and relaxed elegance of Georgian Bay living.',
    localExpertise: 'Cottage Country & Lakefront Specialists',
    expertiseDescription: 'Barrie\'s position as the gateway to cottage country creates unique celebration styles we\'ve perfected over 4 years. Our team understands waterfront venue logistics, seasonal considerations, and the relaxed elegance that defines Barrie celebrations.',
    popularVenues: ['Kempenfelt Conference Centre', 'The Manor by the Lake', 'Barrie Country Club', 'Lakeshore Mews', 'Barrie Yacht Club', 'Centennial Park'],
    uniqueFeature: 'Waterfront venue specialists with weather-resistant equipment',
    testimonialContext: 'Barrie',
    serviceHighlight: 'Expert in lakefront venues, cottage country celebrations, and seasonal outdoor events with stunning Georgian Bay backdrops.',
    neighborhoods: ['Downtown Barrie', 'South End', 'East Bayfield', 'Painswick', 'Sandy Cove', 'Cundles', 'Little Lake', 'Allandale'],
    eventTypes: ['Lakefront weddings', 'Cottage country celebrations', 'Seasonal festivals', 'Marina events', 'Corporate retreats', 'Summer outdoor galas'],
    localContext: 'Barrie\'s lakefront lifestyle and cottage country gateway position create celebrations that blend natural beauty with sophisticated entertainment. Our photo booths complement the relaxed elegance of Georgian Bay living.',
    whyChooseUsExtended: 'We\'ve mastered the unique challenges of lakefront venues, from wind considerations to stunning sunset timing. Our weather-resistant equipment and natural lighting expertise ensure perfect photos whether you\'re celebrating on the water or in Barrie\'s charming downtown.'
  }
};

// Default content for cities not specifically defined
const getDefaultCityContent = (cityName) => ({
  heroDescription: `Professional photo booth rentals bringing excitement and memories to ${cityName} celebrations. Our premium equipment and expert service create unforgettable experiences for weddings, corporate events, and special occasions throughout ${cityName} and surrounding communities.`,
  localExpertise: `${cityName} Community Event Specialists`,
  expertiseDescription: `Our experienced team has been serving ${cityName} and the surrounding region for years, building relationships with local venues and understanding the unique celebration style of your community. We pride ourselves on delivering personalized photo booth experiences that reflect ${cityName}\'s character and charm.`,
  popularVenues: [`${cityName} Community Centre`, 'Local banquet halls', 'Municipal venues', 'Regional event centers', 'Community celebration spaces'],
  uniqueFeature: `Dedicated ${cityName} service with local venue expertise`,
  testimonialContext: cityName,
  serviceHighlight: `Customized photo booth experiences designed specifically for ${cityName}\'s community celebrations, local venues, and regional event traditions.`,
  neighborhoods: [`Downtown ${cityName}`, 'Residential areas', 'Community districts', 'Local neighborhoods'],
  eventTypes: ['Community weddings', 'Local corporate events', 'Municipal celebrations', 'Family gatherings', 'Seasonal festivals', 'Anniversary parties'],
  localContext: `${cityName}\'s community spirit and local charm create the perfect atmosphere for memorable celebrations. Our photo booth services are designed to capture the warmth and character that makes ${cityName} special, ensuring every guest leaves with lasting memories.`,
  whyChooseUsExtended: `We understand ${cityName}\'s local venues, community preferences, and celebration traditions. Our commitment to personalized service means we adapt our photo booth experience to match your community\'s unique style and ensure every ${cityName} event is memorable.`
});

// Helper function to get city-specific content
export const getCityInfo = (citySlug) => {
  const cityName = formatCityName(citySlug);
  const specificContent = cityContentData[citySlug] || getDefaultCityContent(cityName);
  
  return {
    name: cityName,
    slug: citySlug,
    ...specificContent,
    serviceAreas: [
      `${cityName} and surrounding areas`,
      getRegionName(citySlug),
      'Southern Ontario'
    ],
    // Ensure all cities have these extended fields
    neighborhoods: specificContent.neighborhoods || [`Downtown ${cityName}`, 'Surrounding areas'],
    eventTypes: specificContent.eventTypes || ['Weddings', 'Corporate events', 'Celebrations'],
    localContext: specificContent.localContext || `${cityName} celebrations deserve professional photo booth services.`,
    whyChooseUsExtended: specificContent.whyChooseUsExtended || `We provide reliable, professional service throughout ${cityName}.`
  };
};

// Helper to determine region
const getRegionName = (citySlug) => {
  const gtaCities = ['toronto', 'mississauga', 'brampton', 'markham', 'vaughan', 'richmond-hill', 'oakville', 'burlington', 'milton', 'newmarket', 'ajax', 'pickering', 'whitby', 'oshawa'];
  const hamiltonNiagara = ['hamilton', 'grimsby', 'lincoln', 'pelham', 'st-catharines', 'niagara-falls', 'welland', 'thorold'];
  const southwestern = ['kitchener', 'waterloo', 'cambridge', 'guelph', 'london', 'windsor', 'sarnia'];
  const eastern = ['ottawa', 'kingston', 'belleville', 'cornwall', 'brockville'];
  const northern = ['greater-sudbury', 'thunder-bay', 'sault-ste-marie', 'north-bay', 'timmins'];
  
  if (gtaCities.includes(citySlug)) return 'Greater Toronto Area';
  if (hamiltonNiagara.includes(citySlug)) return 'Hamilton-Niagara Region';
  if (southwestern.includes(citySlug)) return 'Southwestern Ontario';
  if (eastern.includes(citySlug)) return 'Eastern Ontario';
  if (northern.includes(citySlug)) return 'Northern Ontario';
  return 'Central Ontario';
};
