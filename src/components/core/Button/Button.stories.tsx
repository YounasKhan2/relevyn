import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
const meta={title:"Core/Button",component:Button,tags:["autodocs"],args:{children:"Create your passport",variant:"primary",size:"md",visualState:"default"},argTypes:{variant:{control:"inline-radio",options:["primary","secondary"]},size:{control:"inline-radio",options:["sm","md","lg"]},visualState:{control:"select",options:["default","hover","focus","pressed","disabled","loading"]}}} satisfies Meta<typeof Button>;
export default meta; type Story=StoryObj<typeof meta>;
export const Playground:Story={}; export const Secondary:Story={args:{variant:"secondary"}}; export const Loading:Story={args:{isLoading:true}}; export const Disabled:Story={args:{visualState:"disabled"}};
