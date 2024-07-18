function s(r) {
  try {
    if (r) {
      const e = r.split(".");
      if (e.length != 3)
        return [
          {
            error: "Invalid JWT format"
          }
        ];
      const o = [], t = e[1], a = e[0], d = JSON.parse(atob(a)), n = JSON.parse(atob(t));
      o.push({
        header: d,
        payload: n
      });
    } else
      return [
        {
          error: "Please provide JWT token."
        }
      ];
  } catch (e) {
    return [
      {
        error: e
      }
    ];
  }
}
export {
  s as DecodeJWT
};
