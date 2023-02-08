import React from 'react'
import styled from 'styled-components'

import Box, { BoxProps } from '../../atoms/box'
import { H4 } from '../../atoms/typography'

import { cssClass } from '../../utils/css-class'

const StyledInfoBox = styled(Box)<BoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: -32px -32px -64px -32px;
`

/**
 * @memberof InfoBox
 * @alias InfoBoxProps
 */
export type InfoBoxProps = {
  /** Title of an InfoBox */
  title?: string;
  /** Inner content - usually couple of {@link Text} nodes */
  children: React.ReactNode;
  /** Optional testId */
  testId?: string;
  variant?: BoxProps['variant'];
}

/**
 * @classdesc
 *
 * <img src="components/info-box.png" />
 *
 * Used for all type of information like:
 *
 * > you don't have x - please add first one"
 *
 * in the system.
 *
 * ### Usage
 *
 * ```javascript
 * import { InfoBox, InfoBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-infobox--default Storybook}
 * @see InfoBoxProps
 * @example
 * return (
 * <InfoBox title="There are no cars in the system">
 *   <Text>Currently there are no cars in the system</Text>
 *   <Text>To create first click</Text>
 *   <Button mt="lg"><Icon icon="Plus" />Create</Button>
 * </InfoBox>
 * )
 * @section design-system
 */
const InfoBox: React.FC<InfoBoxProps> = ({ children, title, variant = 'grey', testId }) => (
  <StyledInfoBox data-testid={testId} variant={variant} className={cssClass('InfoBox')}>
    <Box width={1 / 2}>
      {title && <H4 mb="lg">{title}</H4>}
      {children}
    </Box>
  </StyledInfoBox>
)

export { InfoBox }
export default InfoBox
