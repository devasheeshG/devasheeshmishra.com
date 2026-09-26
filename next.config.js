/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [
            {
                source: "/resume.pdf",
                headers: [
                    {
                        key: "Content-Disposition",
                        value: 'inline; filename="001_Devasheesh_Mishra_AI_Backend_Engineer_Ex-Founder.pdf"',
                    },
                ],
            },
        ];
    },
};
