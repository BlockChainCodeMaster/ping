import db from "../database/db.js";
import { nanoid } from 'nanoid';
const LINK = db.LINK;


export async function getTotalPublicSale(req, res) {
    const totalUsers = await IDO.count({
        where: {
        state: 1,
        },
    });
    console.log("totalUsers",totalUsers)
}


export async function createInvite(req, res) {
    let { from, signature } = req.body;

    if (!from || !signature) {
        res.send({
        msg: "Incomplete parameter",
        code: 0,
        });
        return;
    }

    const ga = !!req.cookies._ga ? req.cookies._ga : "";
    const uuid = nanoid()
    console.log(uuid)

    const createInvite = await LINK.create({
        from: from,
        signature: signature,
        date: String(new Date().getTime()),
        inviteCode: uuid,
        ga: ga,
        status: 0
    })

    if (createInvite) {
        res.send({
        msg: "Success",
        code: 1,
        });
    } else {
        res.send({
        msg: "Failure",
        code: 0,
        });
    }
}

