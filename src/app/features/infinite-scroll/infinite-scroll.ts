import { Component, HostListener } from '@angular/core';
import { InfiniteScrollService } from './infinite-scroll.service';
import { CommonModule } from '@angular/common';
import { shareReplay, takeUntil, throttleTime } from 'rxjs/operators';
import { Subject, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.css'
})
export class InfiniteScroll {
  repoData: any[] = [];
  private destroy$ = new Subject<void>();
  hasMore = true;
  loading = false;
  page = 0;
  constructor(private infiniteServic: InfiniteScrollService) { }
  ngOnInit() {
    this.loadData();
    fromEvent(window, 'scroll')
    .pipe(
      throttleTime(200),           // to avoid multiple time loading load data when scroll
      takeUntil(this.destroy$)
    )
    .subscribe(() => {
      const scrollTop = window.scrollY;  // Current scroll position till user scroll
      const windowHeight = window.innerHeight; // window view area i.e.   Visible Window 
      const docHeight = document.documentElement.scrollHeight;  // complete document height 

      const scrollPosition = (scrollTop + windowHeight) / docHeight;

      if (scrollPosition > 0.8 && !this.loading && this.hasMore) {
        this.loadData();
      }
    });
  }
  loadData() {
    this.page += 1;
    this.loading = true;
    this.infiniteServic.getRepos(this.page)
      .pipe(shareReplay())
      .pipe(takeUntil(this.destroy$))
      .pipe(
        throttleTime(200),
      ).subscribe({
        next: (res: any) => { 
          this.repoData = [...this.repoData, ...res];
          if(res.length == 0){
            this.hasMore = false;
          }
          this.loading = false;
        },
        error: (err:any) => console.log(err)
      }
      )
  }
  ngOnDestroy(){
     this.destroy$.next();
     this.destroy$.complete();
  }
}
