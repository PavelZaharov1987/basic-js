module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                let nextDepth = this.calculateDepth(element);
                if (depth < nextDepth + 1) {
                    depth = nextDepth + 1;
                }
            }
        });
        return depth;
    }
};