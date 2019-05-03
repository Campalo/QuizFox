function getQuestion(category, difficulty) {
  const amount = 10;
  const type = "multiple";
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
  // fetch: make a request to the server to get the info we are looking for based on the Query Parameters we defined
  return (
    fetch(url)
      // then: receive the info (response) and transform it into json format
      .then(response => response.json())
      // then: return only the array with the info we want (questions and answers)
      .then(json => json.results)
  );
}

export default getQuestion;
