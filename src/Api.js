function getQuestion(category, difficulty) {
  const amount = 10;
  const type = "multiple";
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  // make a request to the server to get the info we are looking for based on on the Query Parameters we have
  return (
    fetch(url)
      // receive the info (response) and transform it into json format
      .then(response => response.json())
      // return only the array with the questions and answers
      .then(json => json.results)
  );
}

export default getQuestion;
