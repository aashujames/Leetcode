var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        for(i=0; i<n; i++) {
          if(isBadVersion) {
            return i;
            break;
          }
        }
    };
};
