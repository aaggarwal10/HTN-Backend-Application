define({ "api": [
  {
    "type": "get",
    "url": "/skills/?min_frequency=:min_freq&max_frequency=:max_freq",
    "title": "Get Skill in Frequency Range",
    "name": "GetSkills",
    "group": "Skills",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "min_freq",
            "description": "<p>Optional minimum bound of occurrences of skill in database.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_freq",
            "description": "<p>Optional maximum bound of occurrences of skill in database.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Name-Frequency Pairs representing skills in the database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n     \"name\": \"Java\",\n     \"frequency\": 206\n  },\n  {\n     \"name\": \"iOS\",\n     \"frequency\": 223\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/skills.js",
    "groupTitle": "Skills"
  },
  {
    "type": "get",
    "url": "/users/:email",
    "title": "Get User Information",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>User picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>User company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "skills",
            "description": "<p>Array of skill objects belonging to user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"name\": \"Eliza Wright\",\n \"picture\": \"http://lorempixel.com/200/200/sports/8\",\n \"company\": \"Slambda\",\n \"email\": \"elizawright@slambda.com\",\n \"phone\": \"+1 (913) 504-2495\",\n \"skills\": [\n   {\n     \"name\": \"Go\",\n     \"rating\": 5\n   },\n   {\n     \"name\": \"JS\",\n     \"rating\": 5\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://localhost:4000"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get All Users Information",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of user objects that make up database.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n\n    {\n      \"name\": \"Eliza Wright\",\n      \"picture\": \"http://lorempixel.com/200/200/sports/8\",\n      \"company\": \"Slambda\",\n      \"email\": \"elizawright@slambda.com\",\n      \"phone\": \"+1 (913) 504-2495\",\n      \"skills\": [\n        {\n          \"name\": \"Go\",\n          \"rating\": 5\n        },\n        {\n          \"name\": \"JS\",\n          \"rating\": 5\n        }\n      ]\n    },\n    {\n      \"name\": \"Jenna Luna\",\n      \"picture\": \"http://lorempixel.com/200/200/sports/0\",\n      \"company\": \"Veraq\",\n      \"email\": \"jennaluna@veraq.com\",\n      \"phone\": \"+1 (949) 580-2608\",\n      \"skills\": [\n        {\n          \"name\": \"Android\",\n          \"rating\": 9\n        },\n        {\n          \"name\": \"Android\",\n          \"rating\": 2\n        },\n        {\n          \"name\": \"C\",\n          \"rating\": 7\n        }\n      ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:userID",
    "title": "Update User Information",
    "name": "PutUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Optional name of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Optional picture of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Optional company of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Optional phone of User</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "skills",
            "description": "<p>Optional Array of skill objects belonging to User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Updated name of User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Updated picture of User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Updated company of User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Updated phone of User</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "skills",
            "description": "<p>Updated Array of skill objects belonging to User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n \"name\": \"Anish Aggarwal\",\n \"picture\": \"http://lorempixel.com/200/200/sports/20\",\n \"company\": \"Breality\",\n \"email\": \"anish@anisha.ca\",\n \"phone\": \"+1 (999) 999-999\",\n \"skills\": [\n   {\n     \"name\": \"Basketball\",\n     \"rating\": 10\n   },\n   {\n     \"name\": \"Chess\",\n     \"rating\": 2\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
