function combineLists(list1, list2) {
    let combined = [...list1, ...list2];
    
    combined.sort((a, b) => a.positions[0] - b.positions[0]);

    let result = [];
    for (let item of combined) {
        let last = result[result.length - 1];

        if (last && last.positions[1] >= item.positions[0] + (item.positions[1] - item.positions[0]) / 2) {
            last.values = [...new Set([...last.values, ...item.values])]; // Merge values
        } else {
            result.push(item);
        }
    }
    return result;
}

// Example usage:
let list1 = [{ positions: [0, 5], values: [1, 2] }];
let list2 = [{ positions: [3, 8], values: [3, 4] }];

console.log(combineLists(list1, list2));
