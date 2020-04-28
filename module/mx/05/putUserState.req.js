


body= {
   "query": `
      mutation UserStateMutation ($input: InputUserState, $root_key: String! , $root_id: Int!) {
         putUserState (input: $input, root_key: $root_key , root_id: $root_id) {
            user_state {
	       node_key
	       completed_at
	       last_viewed_at 
	       unstructured
            }
         }
      }`,

   "variables": {
      "input": {
         "node_key": "st095",
	 "node_id":130131,
	 "last_viewed_at":"2020-04-27T12:36:03.024Z"
      },
      "root_key": "st095",
      "root_id": 130131
   },
   "locale":"en-gb"
};

var json= {
  "app": "com.android.chrome",
  "duration": "844ms",
  "headers": {
    "Host": "classroom-content.udacity.com",
    "content-length": "479",
    "accept": "application/json",
    "sec-fetch-dest": "empty",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk1MzgxOTksImlhdCI6MTU4Njk0NjE5OSwia2lkIjoiMTAwMCIsInVpZCI6InUxMjA4NzExOSIsInJvbGVzIjpbInVzZXIiXX0.GrH6u2DXcAE-cQ0coiSfJbwBMPzMZQMDnKSlMLeFOLm8aF6LCsagO7JH7yodZ-REXwDIJczl9r-yl1WZJhAP7n6fLjj1IjnSl94tK86shPz9uRIOlRUKQbedCJXg8XsbBI7EKkXHGrSuYjaSfEb5HBdM5XFwi70z-ig3d05yQGAs_TytMEZHHVKxzsvEqNZUg3mewCL02fnkh7OPwGu8j6dHNyNqtpocNg6MJGQqHQFivK4lBQ8R8SjZVdWoAtAOqun6GIkeVVVTrMUzuFcwg9BmPWtnf1OMe-pEv4vHWS71A_nHU_o6y1Jh_vr6U_CE90tuxdA_JcKrcV0MoOEo7g",
    "save-data": "on",
    "user-agent": "Mozilla/5.0 (Linux; Android 7.0; 9026T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.119 Safari/537.36",
    "content-type": "application/json; charset\u003dUTF-8",
    "origin": "https://classroom.udacity.com",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "referer": "https://classroom.udacity.com/courses/st095/lessons/56465734/concepts/last-viewed",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-GB,en;q\u003d0.9,kn-IN;q\u003d0.8,kn;q\u003d0.7,zh-TW;q\u003d0.6,zh;q\u003d0.5,ja-JP;q\u003d0.4,ja;q\u003d0.3,de-DE;q\u003d0.2,de;q\u003d0.1,en-US;q\u003d0.1,hi;q\u003d0.1"
  },
  "method": "POST",
  "protocol": "h2",
  "remoteIp": "104.16.103.31",
  "remotePort": 443,
  "sessionId": "c621e83f-d738-409e-a718-0cac7d70b979",
  "time": "2020-04-27 18:06:03",
  "url": "https://classroom-content.udacity.com/api/v1/graphql"
};


var text= `POST /api/v1/graphql h2
Host: classroom-content.udacity.com
content-length: 479
accept: application/json
sec-fetch-dest: empty
authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk1MzgxOTksImlhdCI6MTU4Njk0NjE5OSwia2lkIjoiMTAwMCIsInVpZCI6InUxMjA4NzExOSIsInJvbGVzIjpbInVzZXIiXX0.GrH6u2DXcAE-cQ0coiSfJbwBMPzMZQMDnKSlMLeFOLm8aF6LCsagO7JH7yodZ-REXwDIJczl9r-yl1WZJhAP7n6fLjj1IjnSl94tK86shPz9uRIOlRUKQbedCJXg8XsbBI7EKkXHGrSuYjaSfEb5HBdM5XFwi70z-ig3d05yQGAs_TytMEZHHVKxzsvEqNZUg3mewCL02fnkh7OPwGu8j6dHNyNqtpocNg6MJGQqHQFivK4lBQ8R8SjZVdWoAtAOqun6GIkeVVVTrMUzuFcwg9BmPWtnf1OMe-pEv4vHWS71A_nHU_o6y1Jh_vr6U_CE90tuxdA_JcKrcV0MoOEo7g
save-data: on
user-agent: Mozilla/5.0 (Linux; Android 7.0; 9026T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.119 Safari/537.36
content-type: application/json; charset=UTF-8
origin: https://classroom.udacity.com
sec-fetch-site: same-site
sec-fetch-mode: cors
referer: https://classroom.udacity.com/courses/st095/lessons/56465734/concepts/last-viewed
accept-encoding: gzip, deflate, br
accept-language: en-GB,en;q=0.9,kn-IN;q=0.8,kn;q=0.7,zh-TW;q=0.6,zh;q=0.5,ja-JP;q=0.4,ja;q=0.3,de-DE;q=0.2,de;q=0.1,en-US;q=0.1,hi;q=0.1`;


var query= {"query":"\n      mutation UserStateMutation ($input: InputUserState, $root_key: String! , $root_id: Int!) {\n        putUserState (input: $input, root_key: $root_key , root_id: $root_id) {\n          \n  user_state {\n    node_key\n    completed_at\n    last_viewed_at\n    unstructured\n  }\n\n        }\n      }\n    ","variables":{"input":{"node_key":"st095","node_id":130131,"last_viewed_at":"2020-04-27T12:36:03.024Z"},"root_key":"st095","root_id":130131},"locale":"en-gb"};
