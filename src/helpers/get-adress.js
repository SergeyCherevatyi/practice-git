export async function getAdress(ip = '8.8.8.8.') {
  const resonse = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_M6jReeDGtIGl9wV5kJY1sAANyccO2&ipAddress=${ip}`)

  return await resonse.json()
}