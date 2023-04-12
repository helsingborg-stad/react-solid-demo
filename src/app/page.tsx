import Group from "../components/atoms/Group/Group";
import LoginInput from "../components/molecules/LoginInput/LoginInput";
import ServiceLister from "../components/molecules/ServiceLister/ServiceLister";
import ViewCount from "../components/molecules/ViewCount/ViewCount";
import ViewCountSolo from "../components/molecules/ViewCountSolo/ViewCountSolo";
import CustomViewCountProvider from "../components/organisms/CustomViewCountProvider/CustomViewCountProvider";
import Providers from "../components/organisms/Providers/Providers";
import ServiceSwitchers from "../components/organisms/ServiceSwitchers/ServiceSwitchers";

export default function Home(): JSX.Element {
  return (
    <Providers>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: 20,
          }}
        >
          <Group title="Change Service at Runtime">
            <ServiceLister />
            <ServiceSwitchers />
            <ViewCount />
          </Group>
          <Group title="Using Global Service instance">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ServiceLister />
              <LoginInput />
              <ViewCount />
            </div>
          </Group>
          <Group title="Context Override">
            <CustomViewCountProvider>
              <ServiceLister />
              <span>
                The ViewCount component using the nearest context provider,
                which is being overridden by its parent so it is not same as the
                global.
              </span>
              <ViewCount />
            </CustomViewCountProvider>
          </Group>
          <Group title="Isolated Hook">
            <span>
              A variant of the ViewCount component using its own
              useViewCountService hook instead of the global context.
            </span>
            <ViewCountSolo />
          </Group>
        </div>
      </main>
    </Providers>
  );
}
