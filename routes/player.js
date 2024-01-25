import { Router } from "express"


router.post('/search', async (req, res) => {
    // https://api.spotify.com/v1/search?q=artist&type=artist
    let searchTerm = req.body.searchTerm
    
    let {data} = await axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam`, {
    })
    res.json(data)
});

// req/res



export default router;