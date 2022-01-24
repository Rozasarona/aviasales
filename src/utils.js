export const VisibilityFilters = {
    SHOW_CHEAP: 'SHOW_CHEAP',
    SHOW_FAST: 'SHOW_FAST',
    SHOW_OPTIMAL: 'SHOW_OPTIMAL',
}

export const TransfersQuantities = {
    SHOW_ALL: 'SHOW_ALL',
    WITHOUT_TRANSFERS: 'WITHOUT_TRANSFERS',
    ONE_TRANSFER: 'ONE_TRANSFER',
    TWO_TRANSFERS: 'TWO_TRANSFERS',
    THREE_TRANSFERS: 'THREE_TRANSFERS',
}

export const filterTickets = (tickets, transfersQuantities) => {
    if (transfersQuantities.SHOW_ALL) {
        return tickets;
    } else {
        const transfers = {
            WITHOUT_TRANSFERS: 0,
            ONE_TRANSFER: 1,
            TWO_TRANSFERS: 2,
            THREE_TRANSFERS: 3
        };
        const transfersToSearchFor = new Set();
        Object.keys(transfersQuantities).forEach(x => {
            if(transfersQuantities[x]){
                transfersToSearchFor.add(transfers[x]);
            }
        });
        return tickets.filter(
            ticket => ticket.segments.some(
                segment => transfersToSearchFor.has(segment.stops.length)
            )
        );
    }
};

export const sortTickets = (tickets, visibilityFilter) => {
    const compareByPrice = (x, y) => {
        if (x.price < y.price) return -1;
        if (x.price > y.price) return 1;
        return 0;
    };
    const compareByDuration = (x, y) => {
        const maxX = x.segments[0].duration > x.segments[1].duration ? x.segments[0].duration : x.segments[1].duration;
        const maxY = y.segments[0].duration > y.segments[1].duration ? y.segments[0].duration : y.segments[1].duration;
        if (maxX < maxY) return -1;
        if (maxX > maxY) return 1;
        return 0;
    };
    const compareByBoth = (x, y) => {
        const result = compareByPrice(x, y);
        if (result === 0) return compareByDuration(x, y);
        return result;
    };
    switch (visibilityFilter) {
        case VisibilityFilters.SHOW_CHEAP:
            return tickets.sort(compareByPrice);
        case VisibilityFilters.SHOW_FAST:
            return tickets.sort(compareByDuration);
        case VisibilityFilters.SHOW_OPTIMAL:
            return tickets.sort(compareByBoth);
        default:
            return tickets;
    }
};