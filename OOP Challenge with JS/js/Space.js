class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter/2;
    }
	
	/**
	 * Checks if space has an associated token to find its owner
	 * @return  {(null|Object)} Returns null or the owner object of the space's associated token.
	 */
	get owner() {
        if (this.token === null) {
            return null;
        } else {
            return this.token.owner;
        }
	}
    
    /**
     * Draws SVG space
     */
	drawSVGSpace() {    
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");

        document.getElementById("mask").appendChild(svgSpace);     
    }
    
    
    /**
     * Updates space to reflect a token has been dropped into it.
     * @param {Object} token - The dropped token
     */
	mark(token) {
		this.token = token;
	}
}