// export async function doFetch(url, options = {}) {
//     try {
//       // start a loading spinner
//       const headers = {
//         'Content-Type': 'application/json',
//       };
//       const combinedOptions = { headers, ...options };
//       const response = await fetch(url, combinedOptions);
//       const json = await response.json();
//       return json;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     } finally {
//       // Do cleanups here
//       // stop a loading spinner
//     }
//   }

export async function doFetch(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Could not fetch data from api", error);
    }
};