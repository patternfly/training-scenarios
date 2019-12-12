import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
} from "@patternfly/react-table";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye,
  Title,
  Button
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';

class DemoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Resource name" },
        "Status",
        { title: "Risk", props: { className: "pf-u-text-align-center" } },
        "" // deliberately empty
      ],
      rows: [
        ["helloworld-go-2-7gs9s", "New", "High", "2 hours ago"],
        ["nodejs-rest-http-crud", "Pending", "Low", "Created 11 Sept 2019"],
        ["tag-portal-v1-3", "Pending", "Low", "Created 20 Sept 2019"],
        ["tag-portal-v1-2", "Running", "Low", "Created 01 Aug 2019"],
        ["helloworld-go-1-7gs9s", "Running", "Medium", "Created 09 July 2019"],
        ["openshift-cluster-storage-operator", "Running", "High", "Created 27 July 2019"],
        ["tag-portal-v1-1", "Cancelled", "Medium", "Cancelled 30 Aug 2019"]
      ]
    };
  }

  render() {
    const { nameFilters, statusFilters, riskFilters, clearAllFilters } = this.props;
    const { columns, rows } = this.state;

    const filteredRows = nameFilters.length > 0 || statusFilters.length > 0 || riskFilters.length > 0
      ? rows.filter(row => {
        return (
          (nameFilters.length === 0 ||
             nameFilters.some(name => row[0].toLowerCase().includes(name.toLowerCase()))) &&
          (statusFilters.length === 0 || statusFilters.includes(row[1])) &&
          (riskFilters.length === 0 || riskFilters.includes(row[2]))
        );
      })
      : rows;

    rows.filter(row => {
      return statusFilters.includes(row[1]) || riskFilters.includes(row[2]) ||
        rows.filter(row => nameFilters.some(name => row[0].toLowerCase().includes(name.toLowerCase())))
      });

      return filteredRows.length === 0 ? (
        <React.Fragment>
          <Table cells={columns} rows={filteredRows} onSelect={this.onRowSelect} aria-label="Filterable Table Demo">
            <TableHeader />
            <TableBody />
          </Table>
          <Bullseye>
            <EmptyState>
              <EmptyStateIcon icon={SearchIcon} />
              <Title headingLevel="h5" size="lg">
                No results found
              </Title>
              <EmptyStateBody>
                No results match this filter criteria. Remove all filters or clear all filters to show results.
              </EmptyStateBody>
              <EmptyStateSecondaryActions>
                <Button variant="link" onClick={() => clearAllFilters(null)}>
                  Clear all filters
                </Button>
              </EmptyStateSecondaryActions>
            </EmptyState>
          </Bullseye>
        </React.Fragment>
      ) : (
        <Table
          variant={TableVariant.compact}
          cells={columns}
          rows={filteredRows}
          aria-label="filtered table" >
          <TableHeader />
          <TableBody />
        </Table>
      );
  }
}

export default DemoTable;
