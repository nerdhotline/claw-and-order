const URL = "https://api.thecatapi.com/v1/images/search";
const LIMIT = "10";
const KEY = "live_3H0P5gLpYlRVspXYdZgndGhjKVNAnTR2Mv634ZpCjkAbdlW75qNWsgCKz7SaeJ9B";
const HAS_BREEDS = "1";

export const apiLink = `${URL}?limit=${LIMIT}&has_breeds=${HAS_BREEDS}&api_key=${KEY}`;

// https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_3H0P5gLpYlRVspXYdZgndGhjKVNAnTR2Mv634ZpCjkAbdlW75qNWsgCKz7SaeJ9B

export const catObject = (object) => ({
    adaptability: object.breeds[0].adaptability,
    affectionLevel: object.breeds[0].affection_level,
    altNames: object.breeds[0].alt_names,
    cfaURL: object.breeds[0].cfa_url,
    childFriendly: object.breeds[0].child_friendly,
    countryCode: object.breeds[0].country_code,
    countryCodes: object.breeds[0].country_codes,
    description: object.breeds[0].description,
    dogFriendly: object.breeds[0].dog_friendly,
    energyLevel: object.breeds[0].energy_level,
    experimental: object.breeds[0].experimental,
    grooming: object.breeds[0].grooming,
    hairless: object.breeds[0].hairless,
    healthIssues: object.breeds[0].health_issues,
    hypoallergenic: object.breeds[0].hypoallergenic,
    id: object.breeds[0].id,
    imgID: object.id,
    imgWidth: object.width,
    imgHeight: object.height,
    imgURL: object.url,
    indoor: object.breeds[0].indoor,
    intelligence: object.breeds[0].intelligence,
    lap: object.breeds[0].lap,
    lifeSpan: object.breeds[0].life_span,
    name: object.breeds[0].name,
    natural: object.breeds[0].natural,
    origin: object.breeds[0].origin,
    rare: object.breeds[0].rare,
    referenceImageID: object.breeds[0].reference_image_id,
    rex: object.breeds[0].rex,
    sheddingLevel: object.breeds[0].shedding_level,
    shortLegs: object.breeds[0].short_legs,
    socialNeeds: object.breeds[0].social_needs,
    strangerFriendly: object.breeds[0].stranger_friendly,
    suppressedTail: object.breeds[0].suppressed_tail,
    temperament: object.breeds[0].temperament,
    vcaHospitalsURL: object.breeds[0].vcahospitals_url,
    vetStreetURL: object.breeds[0].vetstreet_url,
    vocalisation: object.breeds[0].vocalisation,
    weightMetric: object.breeds[0].weight.metric,
    weightImperial: object.breeds[0].weight.imperial,
    wikiURL: object.breeds[0].wikipedia_url
  });