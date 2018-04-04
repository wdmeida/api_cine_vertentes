[![Build Status](https://travis-ci.org/wdmeida/api_cine_vertentes.svg?branch=master)](https://travis-ci.org/wdmeida/api_cine_vertentes)
[![Coverage Status](https://coveralls.io/repos/github/wdmeida/api_cine_vertentes/badge.svg?branch=master)](https://coveralls.io/github/wdmeida/api_cine_vertentes?branch=master)


# API Cine Vertentes

API developed in [**NodeJS**](https://nodejs.org/) to make the wrapper of the information about the filmes in poster at [**Cine Glória**](http://cinegloria.com/programacao) in the city of **São João Del Rey - MG**.


### Dependencies

* [NodeJS](https://nodejs.org/en/)
* [GraphQL](http://graphql.org/)
* [Express Graphql](https://github.com/graphql/express-graphql)

## Use

Make the repository clone to a local directory. After that enter the directory and install the dependencies:

```npm install```

### Running the tests

If you want to run the tests, run the command:

```npm run test```

### Running the API

Run the command:

```npm run dev```

To perform the API queries, use the url and route:

```http://localhost:3000/api/v2/cinegloria/movies```

### Example of use

For ease of queries, you can use a library or browser plugin that facilitates integration with GraphQL query. Example using the [Altair GraphQL Client](https://altair.sirmuel.design/):

![Example query](/images/query.png)

The base query is ```movies```. It accepts the folowwing attributes:

* name
* weekExhibition
* cover
* duration
* actors
* genre
* local
* session
* trailer
* sinopse

## Contributing

Please read [CONTRIBUTING.md](https://github.com/wdmeida/api_cine_vertentes/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

|  [Wagner Almeida](https://github.com/wdmeida/)   |

See also the list of [contributors](https://github.com/wdmeida/api_cine_vertentes/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
