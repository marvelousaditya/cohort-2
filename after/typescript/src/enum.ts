enum response {
  success = 200,
  badRequest = 400,
  notFound = 404,
}

function omaiwa() {
  console.log(response.success);
}

omaiwa();
