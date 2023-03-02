import { redirect, error } from "@sveltejs/kit";
import cookie from "cookie";

/** @type {import('./$types').Actions} */
export const actions = {
    async new_post({ cookies, request }: any) {
        const requestData = await request.formData();

        const caption = requestData.get("caption") as String;
        const image = requestData.get("image") as String;
        const team = requestData.get("team") as any;
        
        let data: any = {};

        if (caption || caption != "") data["caption"] = caption;
        else throw error(422, "A caption is required.");

        if (image || image != "") data["image"] = image;
        else data["image"] = null;

        if (team === "myself") data["user"] = cookie.parse(request.headers.get("cookie") || "").token || null;
        else data["user"] = team;

        fetch("https://api.nightmarebot.tk/api/posts/post", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            const data: any = await res.json();

            if (data.success) throw redirect(302, "/");
            else throw error(500, data.error);
        }).catch((error) => {
            throw error(500, error);
        });
    }
};
