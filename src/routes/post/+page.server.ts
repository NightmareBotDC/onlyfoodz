import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import cookie from "cookie";
import { randomUUID } from "node:crypto";

/** @type {import('./$types').Actions} */
export const actions = {
    async new_post({ cookies, request }: any) {
        const requestData = await request.formData();

        const caption = requestData.get("caption") as String;
        const team = requestData.get("team") as any;
        const file = requestData.get("image") as File;
        
        let data: any = {};

        if (caption || caption != "") data["caption"] = caption;
        else return {
            error: "Caption is required to post."
        };

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            let image: any;

            reader.onload = (a: any) => {
                image = a.target.result;
            };

            const i = await cloudinary.uploader.upload(`data:image/jpeg;base64,${image}`, {
                resource_type: "image",
                public_id: randomUUID()
            }).then((e) => {
                return e.secure_url
            }).catch((e) => {
                return e;
            });

            data["image"] = i;
        }

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

            if (data.success) window.location.href = "/";
            else return;
        });
    }
};