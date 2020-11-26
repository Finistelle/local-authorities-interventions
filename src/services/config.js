import {Date} from "../components/Intervention/Table/Date/Date";
import {Name} from "../components/Intervention/Table/Name/Name";
import {TextComponent} from "../components/Intervention/Table/TextComponent/TextComponent";
import {SenderComponent} from "../components/Intervention/Table/Sender/SenderComponent";

export const ROUTES = {
  home: '/',
  create: '/create',
  see: '/intervention/:id',
};

export const COMPONENTS = {
  created_at: {
    args: [
      'created_at',
    ],
    component: Date,
  },
  name: {
    args: [
      'name',
      'created_at',
    ],
    component: Name,
  },
  description: {
    args: [
      'description',
    ],
    component: TextComponent,
  },
  sender_name: {
    args: [
      'sender_name',
    ],
    component: TextComponent,
  },
  sender_email: {
    args: [
      'sender_email',
      'sender_phone',
    ],
    component: SenderComponent,
  },
};
