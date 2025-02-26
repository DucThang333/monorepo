import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    ...prefix("student", [
        layout("./routes/student/layout.tsx", [
            index("./routes/student/index.tsx"),
        ]),
    ])
] satisfies RouteConfig;