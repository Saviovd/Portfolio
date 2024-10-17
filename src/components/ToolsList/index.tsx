import { Experience } from '@/types/personaldata';
import Image from 'next/image';
import toolsData from '@/data/tools.json';
import { Tools } from './styles';

const { tools } = toolsData;

interface ToolsListProps {
   job: Experience;
}

export const ToolsList = ({ job }: ToolsListProps) => (
   <Tools>
      {job.tools.map((usageTool, i) => {
         const foundTool = tools.find(
            (tool) => tool.language_name.toLowerCase() === usageTool.toLocaleLowerCase()
         );
         return foundTool ? (
            <li key={i} className='stack'>
               <Image width={40} height={40} src={foundTool.logo} alt={foundTool.language_name} className='stack'/>
            </li>
         ) : null;
      })}
   </Tools>
);
