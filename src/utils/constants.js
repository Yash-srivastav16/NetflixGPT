export const LOGO_URL = "../../public/logo.png";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const USER_ICON =
  "https://th.bing.com/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?rs=1&pid=ImgDetMain";

export const BACKGROUND_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_MOVIE_API_KEY,
  },
};
