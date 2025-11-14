import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../environment";
import { shareReplay } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class InfiniteScrollService {
    private cache: Record<number, any> = {};
    private http = inject(HttpClient);
    constructor() {

    }
    getRepos(page = 1, perPage = 4) {
        const url = `https://api.github.com/users/EvanLi/repos?page=${page}&per_page=${perPage}`;

        if (!this.cache[page]) {
            this.cache[page] = this.http.get(url, {
                headers: {
                    Authorization: environment.GITHUB_PAT
                }
            }).pipe(shareReplay(1)); 
            // will make sure if it call from multiple places will return the same instead calling again
        }
        return this.cache[page];
    }
}