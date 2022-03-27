import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li>
          <a
            [routerLink]="['/']"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Todos</a
          >
        </li>
        <li>
          <a [routerLink]="['/completed']" routerLinkActive="active"
            >Completati</a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        position: fixed;
        background-color: rgb(202,120,215);
        width: 100%;
        margin-top: -6px;

        ul {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding: 0;
          li {
            padding: 5px;
            a {
              text-decoration: none;
              color: black;
              &.active {
                color: purple;
              }
            }
          }
        }
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
