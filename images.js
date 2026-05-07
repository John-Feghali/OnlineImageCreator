const PEXELS_API_KEY = "xMgXYv7oPAC25eujrHflQGeoJYw1htdYZDyFWQTTHPtDj2mvFHWh1mUf";

async function searchPexelsImages(query = "background") {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=9`;

  const response = await fetch(url, {
    headers: {
      Authorization: PEXELS_API_KEY
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch images from Pexels");
  }

  const data = await response.json();

  return data.photos.map(photo => ({
    id: photo.id,
    thumbnail: photo.src.medium,
    fullImage: photo.src.large,
    alt: photo.alt
  }));
}
