// import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import { redirect, error } from "@sveltejs/kit";
import cookie from "cookie";
// import { v4 as uuidv4 } from "uuid";

/* Initalize Cloudinary
cloudinary.config({
    cloud_name: "dh30c3f52",
    api_key: "276832668476137",
    api_secret: "ukpcxBExseUwdDi3mT8bwotmkKo"
});*/

/** @type {import('./$types').Actions} */
export const actions = {
    async new_post({ cookies, request }: any) {
        const requestData = await request.formData();

        const caption = requestData.get("caption") as String;
        const team = requestData.get("team") as any;
        //const file = requestData.get("image") as File;
        
        let data: any = {};

        if (caption || caption != "") data["caption"] = caption;
        else throw error(422, "A caption is required.");

        /*if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            let image: any;

            reader.onload = (a: any) => {
                image = a.target.result;
            };

            const i = await cloudinary.uploader.upload(`data:image/jpeg;base64,${image}`, {
                resource_type: "image",
                public_id: uuidv4()
            }).then((e) => {
                return e.secure_url
            }).catch((e) => {
                return e;
            });

            data["image"] = i;
        } else*/
        data["image"] = null;

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
