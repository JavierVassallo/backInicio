const holaMundo = {};

holaMundo.get = () => {
  return { success: true, mensaje: "hola-mundo" };
};

holaMundo.post = (body) => {
  if (body.nombre != "javier") {
    return { success: false, mensaje: "usted no es javier vassallo" };
  } else {
    return { success: true, mensaje: body };
  }
};

module.exports = holaMundo;
