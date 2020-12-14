import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getUserDetails(userName: string) {
    return this.httpClient.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl){
    return this.httpClient.get(repoUrl);
  }
}
