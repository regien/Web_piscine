// require colors

class Vertex {
    constructor(xyz) {
        var x = 0;
        var y = 0;
        var z = 0;
        var w = 1;
        var color = 0;
        // verbose que ya sabes como resolverlo
        
        if (typeof xyz != 'array')
            return (0);
        x = xyz['x'];
        y = xyz['y'];
        z = xyz['z'];
        if (typeof xyz.w === 'number' && !isEmpty(xyz.w))
            w = xyz.w;
        if (isNaN(xyz.color) && !isEmpty(xyz.color) && xyz.color instanceof Colors) {
            color = xyz.color;
        } else {
            let holder = new Array();
            holder['red'] = 255;
            holder['green'] = 255;
            holder['blue'] = 255;
            color = new Colors(holder);
        }
        if (Vertex.verbose)
            console.log(`Vertex ( x: ${x.toFixed(2)}, y: ${y.toFixed(2)}, z: ${toFixed(2)}, Color( red: ${color.red}, green: ${color.green}, blue: ${color.blue} ) ) constructed`);
    }
   // not finish, continue when you are not sick 
}