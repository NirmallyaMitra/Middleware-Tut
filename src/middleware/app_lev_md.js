const app_lev_md = (req, res, next) => {
  console.log("Application Level Middleware.");
  next();
}

export default app_lev_md;