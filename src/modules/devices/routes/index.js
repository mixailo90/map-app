import DevicesView from "../views/DevicesView.vue";
import DataTableItemDetails from "@/components/DataTableItemDetails.vue";

export default [
  {
    path: "/devices",
    name: "devices",
    component: DevicesView,
    meta: {
      isAuthenticated: true
    },
    children: [
      {
        path: ":id",
        name: "device-details",
        component: DataTableItemDetails,
        meta: {
          isAuthenticated: true
        },
        props: true
      },
      {
        path: "/conctractor/:id",
        name: "device-contractor-details",
        component: DataTableItemDetails,
        meta: {
          isAuthenticated: true
        },
        props: true
      }
    ]
  }
];
