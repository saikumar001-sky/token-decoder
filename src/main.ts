export function DecodeJWT(token: string) {
  try {
    if (token) {
      // 1. Split the token into parts
      const tokenParts = token.split(".");
      if (tokenParts.length != 3) {
        return [
          {
            error: "Invalid JWT format",
          },
        ];
      }
      const decodedResponse = [];
      const payload = tokenParts[1];
      const header = tokenParts[0];
      const decodeHeader = JSON.parse(atob(header));
      const decodedPayload = JSON.parse(atob(payload));
      decodedResponse.push({
        header: decodeHeader,
        payload: decodedPayload,
      });
    } else {
      return [
        {
          error: "Please provide JWT token.",
        },
      ];
    }
  } catch (err) {
    return [
      {
        error: err,
      },
    ];
  }
}
