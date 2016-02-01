import {
    Component,
    ContentChild,
    OnChanges,
    SimpleChange,
    TemplateRef,
} from 'angular2/core';

@Component({
    inputs: [
        'items',
    ],
    selector: 'paginator',
    styleUrls: [
        'app/components/paginator/paginator.component.css',
    ],
    templateUrl: 'app/components/paginator/paginator.component.html',
})
export class PaginatorComponent implements OnChanges  {
    @ContentChild(TemplateRef) contentTpl: TemplateRef;

    public perPage: number = 5;
    public currentPage: number = 0;
    public items: any[];
    public pages: any[];

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (Array.isArray(changes.items.currentValue)) {
            this.updatePages(changes.items.currentValue);
        }
    }

    updatePages(pageItems: any[]) {
        this.pages = [];

        let first: number = 0;
        let last: number;

        do {
            last = first + this.perPage;
            this.pages.push(
                pageItems.slice(first, last)
            );
            first = last;
        } while (first < pageItems.length);

        // Make sure we don't go past the last page after we filter
        if (this.pages.length - 1 < this.currentPage) {
            this.currentPage = this.pages.length - 1;
        }
    }
}
