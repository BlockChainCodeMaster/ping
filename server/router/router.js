
export default function router (router, handle) {
    /** api **/
    router.get("/api/getTotalPublicSale", require("../container/relationship.js").getTotalPublicSale);
    router.post("/api/createInvite", require("../container/relationship.js").createInvite);
    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}