import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PersonnelAreaTable() {
  // Mock data for demonstration
  const areas = [
    { id: 1, name: "采煤工作面", total: 28, leaders: 1, specialWorkers: 8, status: "正常" },
    { id: 2, name: "掘进工作面", total: 15, leaders: 1, specialWorkers: 6, status: "正常" },
    { id: 3, name: "运输巷道", total: 12, leaders: 0, specialWorkers: 3, status: "正常" },
    { id: 4, name: "回风巷道", total: 8, leaders: 0, specialWorkers: 2, status: "正常" },
    { id: 5, name: "机电硐室", total: 10, leaders: 1, specialWorkers: 4, status: "正常" },
    { id: 6, name: "水泵房", total: 5, leaders: 0, specialWorkers: 0, status: "正常" },
    { id: 7, name: "变电所", total: 4, leaders: 0, specialWorkers: 0, status: "正常" },
    { id: 8, name: "主通风机房", total: 5, leaders: 2, specialWorkers: 0, status: "正常" },
  ]

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h3 className="text-base font-medium mb-3">区域人员分布</h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>区域名称</TableHead>
                <TableHead className="text-right">总人数</TableHead>
                <TableHead className="text-right">领导人数</TableHead>
                <TableHead className="text-right">特种作业</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {areas.map((area) => (
                <TableRow key={area.id}>
                  <TableCell className="font-medium">{area.name}</TableCell>
                  <TableCell className="text-right">{area.total}</TableCell>
                  <TableCell className="text-right">{area.leaders}</TableCell>
                  <TableCell className="text-right">{area.specialWorkers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
