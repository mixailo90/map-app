import ContractorsView from "../views/ContractorsView.vue";
import DataTableItemDetails from "@/components/DataTableItemDetails.vue";

export default [
  {
    path: "/contractors",
    name: "contractors",
    component: ContractorsView,
    meta: {
      isAuthenticated: true
    },
    children: [
      {
        path: ":id",
        name: "contractors-details",
        component: DataTableItemDetails,
        meta: {
          isAuthenticated: true
        },
        props: true
      }
    ]
  }
];
