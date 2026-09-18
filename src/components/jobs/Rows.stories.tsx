import type{Meta,StoryObj}from"@storybook/react-vite";import{JobRow}from"./JobRow/JobRow";import{ResultRow}from"./ResultRow/ResultRow";
const meta={title:"Jobs/Rows",component:ResultRow,tags:["autodocs"]}satisfies Meta<typeof ResultRow>;export default meta;type Story=StoryObj<typeof meta>;
const resultArgs={title:"Senior Product Engineer",company:"Northstar Labs",meta:"Remote · Europe · Full-time",skills:"TypeScript · API design · PostgreSQL",salary:"$110k–140k",posted:"Posted 2d ago",sourceLabel:"External source"};
export const Result:Story={args:resultArgs};export const ResultSelected:Story={args:{...resultArgs,selected:true}};
export const PublicRow=()=> <JobRow title="Senior Product Engineer" company="Northstar Labs" meta="Remote · Europe · Full time" skills="TypeScript · APIs · Data systems"/>;
