const route_lev_md = (req, res, next) => {
  console.log("Route Level Middleware.");
  next();
}

export default route_lev_md;