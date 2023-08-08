"use client";

import {
  Flex,
  ProgressBar,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@tremor/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Tabs() {
  const router = useRouter();

  return (
    <TabGroup>
      <TabList className="mt-8">
        <Tab>Overview</Tab>
        <Tab>Invoices</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="mt-10">
            <Flex className="mt-4">
              <Text className="w-full">Product Y</Text>
              <Flex className="space-x-2" justifyContent="end">
                <Text>$ 108,799</Text>
                <Text>38%</Text>
              </Flex>
            </Flex>
            <ProgressBar value={38} className="mt-2" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-10">
            <Flex className="mt-4">
              <Text className="w-full">Product Z</Text>
              <Flex className="space-x-2" justifyContent="end">
                <Text>$ 99,484</Text>
                <Text>16%</Text>
              </Flex>
            </Flex>
            <ProgressBar value={12} className="mt-2" />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
