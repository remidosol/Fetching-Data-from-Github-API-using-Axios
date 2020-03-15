# Fetching Data from Github API using Axios


## Description


<h3><u>github.js</u></h3>


<dl>
  <dt>Creating Instance</dt>
  <dd>Via using CDN source for Axios, a instance that produced for HTTP requests 
      has been created in github.js as shown following.</dd>

   ```javascript
   function GitHubAPI() {
      
          this.instance = axios.create({
              baseURL: ``,
              headers: {'Content-type': 'application/json'}
          });
      }
   ```

  <dt>Using Instance</dt>
  <dd>For using instances, a method has been created as named <em>getGitHubData</em>.</dd>
</dl>

***

<h3><u>storage.js</u></h3>

<dl>
  <dt>Context</dt>
  <dd>It contains three methods as named <em>saveSearchedUser</em>, <em>getUsersFromStorage</em> and <em>removeAllUsers</em> 
  for <strong>saving</strong> searched users, <strong>getting</strong> searched users and <strong>removing</strong> searched users.</dd>
</dl>

***

<h3><u>ui.js</u></h3>


<dl>
  <dt>Goal</dt>
  <dd>For DOM manipulation in <em>index.html</em>.</dd>
</dl>

***

<h3><u>app.js</u></h3>

<dl>
  <dt>Main</dt>
  <dd>This is the main file for <strong>execute all</strong>.</dd>
</dl>


***

<u><h3>index.html</h3></u>


<dl>
  <dt>Skeleton</dt>
  <dd>This file is reference for <strong>events</strong> and <strong>DOM</strong>.</dd>
</dl>