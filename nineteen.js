function pathFinder(maze) {
    function solve(pos) {
        if ( pos===width*width-1 ) return true;
        if ( maze[pos]!=="." ) return false;
        maze = maze.slice(0,pos)+"#"+maze.slice(pos+1);
        return (pos+1)%width!==0 && solve(pos+1) ||
            solve(pos+width) ||
            pos%width!==0 && solve(pos-1) ||
            pos>width && solve(pos-width);
    }
    const width = maze.indexOf("\n");
    maze = maze.replace(/\n/g,"");
    return solve(0);
}
