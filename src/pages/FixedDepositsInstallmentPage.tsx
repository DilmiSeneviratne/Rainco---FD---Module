import { useState } from 'react';
import { SapChrome, SapRoute, SapWindow } from '../components/sap/SapChrome';

const HEAD = [
  'Check',
  'Due Date',
  'FD Number',
  'Capital',
  'Interest Value',
  'Total Value',
  'Bank Account',
  'Capital GL/Account',
  'Interest GL/Account',
  'Bank GL / Account',
  'Rate',
  'Installment T...',
];

const ROWS: string[][] = [
  ['07/30/23', 'FD-6282332248', '100,000.00000', '5,000.0000', '105,000.00000', '27020617379', '110111010000', '110108010000', '', '5.00000', '1'],
  ['08/30/23', 'FD-6282332248', '100,000.00000', '5,000.0000', '105,000.00000', '27020617379', '110111010000', '110108010000', '', '5.00000', '1'],
  ['09/30/23', 'FD-6282332248', '100,000.00000', '5,000.0000', '105,000.00000', '27020617379', '110111010000', '110108010000', '', '5.00000', '1'],
  ['10/30/23', 'FD-6282332248', '100,000.00000', '5,000.0000', '105,000.00000', '27020617379', '110111010000', '110108010000', '', '5.00000', '1'],
  ['08/10/23', 'FD-752335857', '87,500.00000', '4,375.0000', '91,875.00000', '27020553664', '110105010000', '110108010000', '', '5.00000', '1'],
  ['09/10/23', 'FD-752335857', '87,500.00000', '4,375.0000', '91,875.00000', '27020553664', '110105010000', '110108010000', '', '5.00000', '1'],
  ['10/10/23', 'FD-752335857', '87,500.00000', '4,375.0000', '91,875.00000', '27020553664', '110105010000', '110108010000', '', '5.00000', '1'],
  ['11/10/23', 'FD-752335857', '87,500.00000', '4,375.0000', '91,875.00000', '27020553664', '110105010000', '110108010000', '', '5.00000', '1'],
  ['08/10/23', 'FD-752341020', '15,000.00000', '750.0000', '15,750.00000', '0270010414137', '110105010000', '110108010000', '', '5.00000', '1'],
  ['09/10/23', 'FD-752341020', '15,000.00000', '750.0000', '15,750.00000', '0270010414137', '110105010000', '110108010000', '', '5.00000', '1'],
  ['10/10/23', 'FD-752341020', '15,000.00000', '750.0000', '15,750.00000', '0270010414137', '110105010000', '110108010000', '', '5.00000', '1'],
  ['11/10/23', 'FD-752341020', '15,000.00000', '750.0000', '15,750.00000', '0270010414137', '110105010000', '110108010000', '', '5.00000', '1'],
  ['08/12/23', 'FD-762395603', '13,888.75000', '2,083.3100', '15,972.06000', '113514020461', '110111010000', '110105010000', '', '5.00000', '2'],
  ['09/12/23', 'FD-762395603', '13,888.75000', '1,388.8800', '15,277.63000', '113514020461', '110111010000', '110105010000', '', '5.00000', '2'],
];

export function FixedDepositsInstallmentPage({
  onNavigate,
}: {
  onNavigate: (to: SapRoute) => void;
}) {
  const [statusLeft, setStatusLeft] = useState<string>('(Date)');
  const [fdNumberFilter, setFdNumberFilter] = useState<string>('');
  const [checkedRows, setCheckedRows] = useState<boolean[]>(() =>
    ROWS.map(() => true)
  );

  const visibleRows = ROWS.filter((row) =>
    fdNumberFilter.trim()
      ? row[1].toLowerCase().includes(fdNumberFilter.trim().toLowerCase())
      : true
  );

  return (
    <SapChrome
      title="TEST | manager"
      statusLeft={statusLeft}
      currentRoute="/installment"
      onNavigate={onNavigate}
    >
      <SapWindow caption="Fixed Deposits Installment Process">
        <div className="min-h-[470px] p-2">
          {/* Filter bar */}
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-1">
              <div className="w-[54px]">Due Date</div>
              <input className="sap-input w-[130px]" defaultValue="03/01/26" />
            </div>

            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() =>
                  setStatusLeft(
                    `Loaded ${visibleRows.length} Fixed Deposits schedule rows.`
                  )
                }
                className="sap-button w-[60px] cursor-pointer"
              >
                View
              </button>
              <button
                type="button"
                onClick={() => {
                  setFdNumberFilter('');
                  setCheckedRows(ROWS.map(() => false));
                  setStatusLeft('Filters cleared.');
                }}
                className="sap-button w-[60px] cursor-pointer"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-[2px]">
              <div className="flex items-center gap-1">
                <div className="w-[76px] truncate">FD Number</div>
                <input
                  className="sap-input w-[130px] bg-sap-highlight/25"
                  value={fdNumberFilter}
                  onChange={(e) => setFdNumberFilter(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[76px] truncate">From Due Da</div>
                <input className="sap-input w-[130px]" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[76px] truncate">To Due Date</div>
                <input className="sap-input w-[130px]" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-[3px]">
              <button
                type="button"
                onClick={() =>
                  setStatusLeft('Filtered by FD Number selection.')
                }
                className="sap-button w-[104px] cursor-pointer"
              >
                Select FD Nu...
              </button>
              <button
                type="button"
                onClick={() => setStatusLeft('Filtered by Due Dates.')}
                className="sap-button w-[104px] cursor-pointer"
              >
                Select Due Dates
              </button>
              <button
                type="button"
                onClick={() =>
                  setStatusLeft('Filtered by FD Number and Due Dates.')
                }
                className="sap-button w-[88px] cursor-pointer"
              >
                Select Both
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-2 overflow-x-auto border border-sap-grid-line">
            <table className="w-full min-w-[1100px] border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-sap-grid-head text-left">
                  {HEAD.map((h) => (
                    <th
                      key={h}
                      className="border border-sap-grid-line px-1 py-[2px] font-normal"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleRows.map((row, r) => (
                  <tr
                    key={`${row[1]}-${row[0]}-${r}`}
                    className={r % 2 ? 'bg-sap-row-alt' : 'bg-sap-field-bg'}
                  >
                    <td className="border border-sap-grid-line px-1 text-center">
                      <input
                        type="checkbox"
                        checked={checkedRows[r] ?? true}
                        onChange={(e) => {
                          const next = [...checkedRows];
                          next[r] = e.target.checked;
                          setCheckedRows(next);
                        }}
                        className="h-[11px] w-[11px]"
                      />
                    </td>
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="border border-sap-grid-line px-1"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-1 h-[13px] border border-sap-grid-line bg-sap-grid-head" />

          <button
            type="button"
            onClick={() => {
              const count = checkedRows.filter(Boolean).length;
              setStatusLeft(
                `Processed ${count} selected Fixed Deposits installment entries.`
              );
            }}
            className="sap-button mt-5 w-[56px] cursor-pointer"
          >
            Process
          </button>
        </div>
      </SapWindow>
    </SapChrome>
  );
}
